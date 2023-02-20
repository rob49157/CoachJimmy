import React from 'react'
import {useNavigate } from "react-router-dom";
import WeightTraining1 from "../images/WeightTraining.jpg"

function Weighttraining() {

  const navigate= useNavigate()
  const handleClick= () => navigate('/Contact')

  return (
       <div className="card">
    <h1>WeightTraining</h1>
    <img src={WeightTraining1} className="image"></img>
    <h1> Coach Jimmy</h1>
    <p class="title">
    Strength training may enhance your quality of life and improve your ability to do everyday activities. Strength training can also protect your joints from injury. Building muscle also can contribute to better balance and may reduce your risk of falls. This can help you maintain independence as you age.
    </p>
    
    
     
      <p>
        <button type="button" onClick={handleClick} >Contact</button>
      </p>
    
    {/* <Experience/> */}
  </div>
  )
}

export default Weighttraining