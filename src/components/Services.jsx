import React from 'react'
import './css/Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight  } from '@fortawesome/free-solid-svg-icons';
import cardData from './ServicesData'



export default function Services() {
  return (
    <section id='services' className="servicesCont">
      <h1 data-aos="fade-in">Let’s Build Something Exceptional</h1>
      <h3 data-aos="zoom-in">"Whether it’s a sleek portfolio, an engaging e-commerce platform, or a robust web application, I’m here to make it happen."</h3>
      <div className="cardsCont">
      {cardData.map((card, index) => (
        <div className="card" data-aos="flip-left" key={index}>
          <img src={card.icon} alt="" />
          <div className="title">{card.title}</div>
          <div className="desc">{card.desc}</div>
          <button>Learn More  <FontAwesomeIcon style={{ marginLeft: '10px', fontSize: '15px' }} icon={faArrowCircleRight} /></button>
        </div>
      ))}
      </div>
    </section>
  )
}
