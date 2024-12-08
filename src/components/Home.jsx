import React from "react";
import "./css/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import profilePic from './images/profilePic.png'

const Home = () => {
  return (
    <div className="home">
      {/* Introduction Section */}

      <div className="introCont">
      <div className="intro">
        <h3 className="title">Web Developer</h3>
        <h1 className="name">
          Hello, I’m <span>Prabhat Kumar</span>
        </h1>
        <p className="description">
          I excel at crafting elegant digital experiences and I am proficient
          in various programming languages and technologies.
        </p>

        {/* Buttons */}
        <div className="buttons">
      <button className="btn-download">Download CV</button>

       <div className="social-icons">
        <a href="https://github.com/2012prabhat" target="_blank" rel="noopener noreferrer" className="icon">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/prabhat-kumar-660508190" target="_blank" rel="noopener noreferrer" className="icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
       
      </div>

        </div>
      </div>

      {/* Profile Section */}
      <div className="profile">
        <div className="profile-circle">
          <img
            src={profilePic}
            alt="Prabhat Kumar"
            className="profile-pic"
          />
        </div>
      </div>

      </div>
     
      {/* Stats Section */}
      <div className="stats">
        <div className="stat">
          <h2>2.5</h2>
          <p>Years of experience</p>
        </div>
        <div className="stat">
          <h2>10+</h2>
          <p>Projects completed</p>
        </div>
        <div className="stat">
          <h2>8</h2>
          <p>Technologies mastered</p>
        </div>
        <div className="stat">
          <h2>499</h2>
          <p>Code commits</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
