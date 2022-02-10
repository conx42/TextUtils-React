import React, {useState} from 'react';

export default function TextForm(props) {
// const [Text, setText] = useState('Enter text here');
const [Text, setText] = useState('');
/*This is the main Fuction to write anything in the text form or change the text form */
const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
    }
/* for changing text to UpperCase */
const handleUpClick = ()=>{
  // console.log("Uppercase was clicked: " + Text);
  console.log("Uppercase was clicked!!!");
  let newText = Text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to upperCase!!", "success");
}
/* for changing text to LowerCase */
const handleLowClick = ()=>{
  // console.log("Uppercase was clicked: " + Text);
  console.log("Lowercase was clicked!!!");
  let newText = Text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to lowerCase!!", "success");
}
/* for Clearing the whole text */
const handleClearClick = (event)=>{
    setText("");
    props.showAlert("Text is cleared!!", "success");
    }
/*For copy the Whole text */
const handleCopy = () => {
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text was copied!!", "success");
}

/*For Remove the all extraspaces from the text */
const handleExtraSpaces = () => {
  let newText = Text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces were cleared", "success");
}
    
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea
            value={Text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'? 'rgb(7 7 76)' : 'white', color: props.mode==='dark'? 'white' : 'black'}}
            className="form-control"
            id="myBox"
            rows="8"
        ></textarea>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'? 'white' : 'black'}}>
        <h2>Your Text Summary</h2>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{Text.length> 0?Text:"Enter something to Preview Here!!!"}</p>
    </div>
    </>
  );
}
