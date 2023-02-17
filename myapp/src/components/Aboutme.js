import React from "react";
import Runpic from "../images/running.jpg";
import './aboutme.css';


function Aboutme() {
  return (
    <div className= "card">
      <img src={Runpic} className="image"></img>
      <h1>Jimmy</h1>
      <p class="title">CEO & Founder, fsadfsdfsadfsadfsadfsdafsdfsafsadfsadfsafdsafdsdfsadf</p>
      <p><button>Contact</button></p>
    </div>

      
      
  );
}

export default Aboutme;
