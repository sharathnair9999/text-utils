import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(
    "Enter your text here to convert from lower to uppercase"
  );
  const convertToUpperCase = () => {
    // console.log("convert button clicked")

    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!","success")
  };
  const convertToLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!","success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const clearForm = () =>{
    setText('')
    props.showAlert("The form is cleared!","success")
  }
  const extraSpaceRemover = () =>{
    setText(text.replace(/\s+/g, " "))
    props.showAlert("Extra spaces have been removed!","success")
  }
  return (
    <>
      <div className="container">
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control "
            style = {{backgroundColor:props.mode==='light'?'white':'#051d41', color:props.mode==='light'?'black':'white'}}
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={convertToUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={convertToLowerCase}>
          Convert to Lowercase
        </button>
        <button className= 'btn btn-primary mx-1' onClick= {clearForm}>Clear Text</button>
        <button className = 'btn btn-primary mx-1' onClick={extraSpaceRemover}>Remove Extra Space</button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.trim().length===0?'0':text.trim().split(" ").length} words and {text.split("").length} characters
        </p>
        <p>
          {" "}
          This passage will take {text.trim().length===0?'0':text.trim().split(" ").length * 0.008} minutes
          of read.
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text in the above textbox to preview"}</p>
      </div>
      
    </>
  );
}
