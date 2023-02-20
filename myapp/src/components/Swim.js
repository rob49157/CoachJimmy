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
    Why do i need swimming?
              Just two and a half hours per week of aerobic physical activity, such as swimming, bicycling, or running, can decrease the risk of chronic illnesses. This can also lead to improved health for people with diabetes and heart disease,2 Swimmers have about half the risk of death compared with inactive people.
    </p>
    
    
     
      <p>
        <button type="button" onClick={handleClick} >Contact</button>
      </p>
    
    {/* <Experience/> */}
  </div>
  )
}
