import React from 'react'
import './Cards.css';
import CardItem from './CardItem';
import Bikepic from "../images/Bikepic.jpg"
import Runpic from "../images/running.jpg"
import WeightTraining from "../images/WeightTraining.jpg"
import Swim from "../images/swim.webp"

function Cards() {
  return (
    <div className='cards'>
      <h2 className="header">Services</h2>
       <ul className='cards__items'>
        
            <CardItem
            src={Bikepic}
              text='Cycling strengthens your heart muscles, lowers resting pulse and reduces blood fat levels. Research also shows that people who cycle to work have two to three times less exposure to pollution than car commuters, so their lung function is improved.'
              label='Bike'
              path='/Bike'
              
            />
            <CardItem
              src={Runpic}
              text='Health benefits of running and jogging
              help to build strong bones, as it is a weight bearing exercise. strengthen muscles. improve cardiovascular fitness. burn plenty of kilojoules.'
              label='Running'
              path='/Run'
            />
            <CardItem
              src={Swim}
              text='Why do i need swimming?
              Just two and a half hours per week of aerobic physical activity, such as swimming, bicycling, or running, can decrease the risk of chronic illnesses. This can also lead to improved health for people with diabetes and heart disease,2 Swimmers have about half the risk of death compared with inactive people.'
             
              label='Swimming'
              path='/Swim'
            />
             <CardItem
              src={WeightTraining}
              text='Strength training may enhance your quality of life and improve your ability to do everyday activities. Strength training can also protect your joints from injury. Building muscle also can contribute to better balance and may reduce your risk of falls. This can help you maintain independence as you age.'
              label='WeighTraining'
              path='/WeightTraining'
            />

        
            
          </ul>
          </div>
  )
}

export default Cards