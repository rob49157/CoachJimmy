import React from "react";
import Runpic from "../images/running.jpg";
import './aboutme.css';
function Aboutme() {
  return (
    <div>
      <div className="container">
        <h1> Jimmy</h1>
        <h2> Personal Trainer/Coach</h2>
        <div>
          <img className="image" src={Runpic} />
        </div>
        <p>about me paragraph......</p>
      </div>
    </div>
  );
}

export default Aboutme;
