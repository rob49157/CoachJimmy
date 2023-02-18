import React from "react";
import {useNavigate } from "react-router-dom";
import Runpic from "../images/running.jpg";
import "./aboutme.css";
import Contact from "./Contact";

function Aboutme() {


  const navigate= useNavigate()
  const handleClick= () => navigate('/Contact')

  return (
    <div className="card">
      <h1>Coach</h1>
      <img src={Runpic} className="image"></img>
      <h1>Jimmy</h1>
      <p class="title">
        CEO & Founder, fsadfsdfsadfsadfsadfsdafsdfsafsadfsadfsafdsafdsdfsadf
      </p>
      
      
       
        <p>
          <button type="button" onClick={handleClick} >Contact</button>
        </p>
      
      {/* <Experience/> */}
    </div>
  );
}

export default Aboutme;
