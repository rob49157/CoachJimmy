import React from 'react'
import {useNavigate } from "react-router-dom";

import Bikepic from "../images/Bikepic.jpg"

function Bike() {
  const navigate= useNavigate()
  const handleClick= () => navigate('/Contact')
  return (
    <div className="card">
    <h1>Bike</h1>
    <img src={Bikepic} className="image"></img>
    <h1> Coach Jimmy</h1>
    <p class="title">
      On this class will explore biking techniques
    </p>
    
    
     
      <p>
        <button type="button" onClick={handleClick} >Contact</button>
      </p>
    
    {/* <Experience/> */}
  </div>
);
}


export default Bike