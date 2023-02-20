import React from 'react'
import {useNavigate } from "react-router-dom";
import Swimpic from "../images/swim.webp"






export default function Swim() {

  const navigate= useNavigate()
  const handleClick= () => navigate('/Contact')

  return (
   <div className="card">
    <h1>Swimming</h1>
    <img src={Swimpic} className="image"></img>
    <h1> Coach Jimmy</h1>
    <p class="title">
     On this class will focus on swimming techniques
    </p>
    
    
     
      <p>
        <button type="button" onClick={handleClick} >Contact</button>
      </p>
    
    {/* <Experience/> */}
  </div>
  )
}
