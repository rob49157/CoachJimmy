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
      On this class will focus on Muscle Definition
    </p>
    
    
     
      <p>
        <button type="button" onClick={handleClick} >Contact</button>
      </p>
    
    {/* <Experience/> */}
  </div>
  )
}

export default Weighttraining