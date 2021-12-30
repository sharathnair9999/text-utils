import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  // const sampleVar = process.env
  // console.log("sample variable from env",sampleVar);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#051d41";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled!","success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled!", "success")
    }
  };
  return (
    <>
    <Router>
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Switch>
          <Route exact path="/about">
            <About mode = {mode} />
          </Route>
        
          <Route exact path="/">
          <div className="container">
        <TextForm showAlert = {showAlert} heading={`${process.env.REACT_APP_HEADING_SAMPLE}`} mode={mode} />
      </div>
          </Route>
        </Switch>
        </Router>

    </>
  );
}

export default App;
