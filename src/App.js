import React, {useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toogleMode = ()=>{
    if(mode === 'light'){
      
      setMode('dark');
      document.body.style.backgroundColor = "#18225e";
      showAlert("Dark mode hasbeen enebled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is amaizing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now"
      // }, 1500);
    }
    else{
      
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("LIGHT mode hasbeen enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
    {/* <Navbar title = "My Blog" aboutText = "About My Blog"/>  */}
    {/* <Navbar/> */}
    <Router>
      <Navbar title = "My Blog" mode ={mode} toogleMode={toogleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3 ">
      <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter your Text to Analyze" mode ={mode}/>
            </Route>
      </Switch>
      {/* <About/> */}
      </div>
    </Router>
    </>
  );
}

export default App;