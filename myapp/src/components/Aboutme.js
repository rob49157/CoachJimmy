import React from "react";
import Runpic from "../images/running.jpg";
import './aboutme.css';
import Experience from './Experience'


function Aboutme() {
  return (
    <div className= "card">
      <h1>Coach</h1>
      <img src={Runpic} className="image"></img>
      <h1>Jimmy</h1>
      <p class="title">CEO & Founder, fsadfsdfsadfsadfsadfsdafsdfsafsadfsadfsafdsafdsdfsadf</p>
      <p><button>Contact</button></p>
      <Experience/>
    </div>

      
      
  );
}

export default Aboutme;
