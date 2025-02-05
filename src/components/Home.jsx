import React,{useState} from "react";
import "./css/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import profilePic from './images/profilePic.png'
import { motion } from "framer-motion";
import CountUp from "react-countup";


const Home = ({theme}) => {
 

  function calculateExperience(joiningDate) {
    const currentDate = new Date(); // Get the current date
    const joinDate = new Date(joiningDate); // Convert joining date to a Date object

    if (isNaN(joinDate)) {
        throw new Error("Invalid joining date format. Use 'YYYY-MM-DD'.");
    }

    const years = currentDate.getFullYear() - joinDate.getFullYear();
    const months = currentDate.getMonth() - joinDate.getMonth();
    const days = currentDate.getDate() - joinDate.getDate();

    // Calculate total experience in years
    let totalExperience = years + months / 12;

    // Adjust for days
    if (days < 0) {
        totalExperience -= 1 / 12;
    }

    // Round to one decimal place
    totalExperience = Math.round(totalExperience * 10) / 10;

    return totalExperience;
}
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
        I specialize in designing seamless digital experiences and bring expertise in diverse programming languages and modern technologies.
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
           <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        viewBox="0 0 500 500"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke={'var(--activeCol)'}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{
            strokeDasharray: "24 10 0",
          }}
          animate={{
            strokeDasharray: [
              "15 120 25 25",
              "16 25 92 72",
              "4 250 22 22",
            ],
            rotate: [120, 360],
          }}
          transition={{
            strokeDasharray: { repeat: Infinity, duration: 4 },
            rotate: { repeat: Infinity, duration: 4, ease: "linear" },
          }}
        />
      </motion.svg>
        </div>
       
      </div>
      <div>
  
    </div>
      </div>
     
      {/* Stats Section */}
      <div className="stats">
      <div className="stat">
        <h2>
          <CountUp end={calculateExperience("07-01-2022")} duration={3} delay={2} decimals={1}
            decimal="." />
        </h2>
        <p>Years of experience</p>
      </div>
      <div className="stat">
        <h2>
          <CountUp end={10} duration={3} delay={2} />
        </h2>
        <p>Projects completed</p>
      </div>
      <div className="stat">
        <h2>
          <CountUp end={8} duration={3} delay={2} />
        </h2>
        <p>Technologies mastered</p>
      </div>
      <div className="stat">
        <h2>
          <CountUp end={499} duration={3} delay={2} />
        </h2>
        <p>Code commits</p>
      </div>
    </div>
    </div>
  );
};

export default Home;
