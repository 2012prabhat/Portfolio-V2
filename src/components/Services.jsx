import React from 'react'
import './css/Services.css'
import globe from './images/globe.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight  } from '@fortawesome/free-solid-svg-icons';
import ui from './images/ui.svg'
import ecommerce from './images/ecommerce.svg';
import api from './images/api.svg'
import seo from './images/seo.svg'
import fullStack from './images/fullStack.svg'



export default function Services() {
  const cardData = [
    { title: 'Web Development', desc: 'Building fast, responsive, and modern websites tailored to your needs.',icon:globe },
    { title: 'UI/UX Design', desc: 'Creating visually appealing and user-friendly designs.',icon:ui },
    { title: 'Full-Stack Development', desc: 'Providing complete web solutions with front-end and back-end expertise.',icon:fullStack },
    { title: 'E-commerce Solutions', desc: 'Building secure and scalable online stores to help grow your business.',icon:ecommerce },
    { title: 'API Integration', desc: 'Seamlessly connecting your services and data for optimal performance.',icon:api},
    { title: 'SEO Optimization', desc: 'Helping your website rank higher on search engines with effective SEO strategies.',icon:seo }
  ];
  return (
    <div className="servicesCont">
      <h1>Let’s Build Something Exceptional</h1>
      <h3>"Whether it’s a sleek portfolio, an engaging e-commerce platform, or a robust web application, I’m here to make it happen."</h3>
      <div className="cardsCont">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.icon} alt="" />
          <div className="title">{card.title}</div>
          <div className="desc">{card.desc}</div>
          <button>Learn More  <FontAwesomeIcon style={{ marginLeft: '10px', fontSize: '15px' }} icon={faArrowCircleRight} /></button>
        </div>
      ))}
      </div>
    </div>
  )
}
