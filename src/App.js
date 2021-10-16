import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import TextForm from './components/TextForm'

function App() {
  const [mode, setMode] = useState('light')


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      
    }
    else {
      setMode('light')
    }
  }
  return (
    <>
      <NavBar title="TextUtils"  mode = {mode} toggleMode = {toggleMode} />
      <div className="container">
        {" "}
        <TextForm heading="Enter your text here"/>
      </div>
    </>
  );
}

export default App;
