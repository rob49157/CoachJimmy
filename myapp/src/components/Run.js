import React from 'react'
import {useNavigate } from "react-router-dom";


import Runpic from "../images/running.jpg"

function Run() {
  const navigate= useNavigate()
  const handleClick= () => navigate('/Contact')
  return (
    <div className="card">
    <h1>Runnning</h1>
    <img src={Runpic} className="image"></img>
    <h1> Coach Jimmy</h1>
    <p class="title">
    'Health benefits of running and jogging
    help to build strong bones, as it is a weight bearing exercise. strengthen muscles. improve cardiovascular fitness. burn plenty of kilojoules.
    </p>
    
    
     
      <p>
        <button type="button" onClick={handleClick} >Contact</button>
      </p>
    
    {/* <Experience/> */}
  </div>
);
}

export default Run