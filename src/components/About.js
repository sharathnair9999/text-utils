import React from 'react'
import { properties } from '../properties/properties'
export default function About(props) {
  const myStyle = {
    color: props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'#051d41':'white'
  }
  return (
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Convert Cases
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" style = {myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {properties.accordian1}
         </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Copy to Clipboard
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" style = {myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {properties.accordian2}
          </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Remove extra spaces
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" style = {myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        {properties.accordian3}
           </div>
      </div>
    </div>
  </div>
  )
}
