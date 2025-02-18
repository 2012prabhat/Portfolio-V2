import React from "react";
import ProgressBar from "./ProgressBar";
import "./css/Resume.css";
import { workEx } from "./WorkExData";

export default function Resume() {
  return (
    <>
      <div className="projectsCont">
        <h1 data-aos="fade-in">My Skills</h1>
        <h3 data-aos="zoom-in">"Building seamless experiences with clean and efficient code."</h3>

        <div className="skillCont">
          <ProgressBar progress={85} skill="React Js" icon="react.png" />
          <ProgressBar progress={90} skill="Javascript" icon="js.png" />
          <ProgressBar progress={80} skill="HTML" icon="html.png" />
          <ProgressBar progress={85} skill="CSS" icon="css.png" />
          <ProgressBar progress={80} skill="Tailwind" icon="tailwind.svg" />
          <ProgressBar progress={70} skill="Node Js" icon="node.png" />
          <ProgressBar progress={75} skill="Express Js" icon="express.png" />
          <ProgressBar progress={75} skill="Mongo DB" icon="mongo.png" />
          <ProgressBar progress={70} skill="Redux" icon="redux.svg" />
          <ProgressBar progress={65} skill="Firebase" icon="firebase.png" />
          <ProgressBar progress={65} skill="Next Js" icon="next.png" />
        </div>
      </div>

      <div className="projectsCont">
        <h1>Industry Experience</h1>
        <h3>
          "Transforming ideas into scalable solutions with real-world
          expertise."
        </h3>
        {workEx.map((m, i) => {
          return (
            <div className="workEx">
              <div className="title">
                <div>
                  <span className="des">{m.designation}</span> at{" "}
                  <span className="org">{m.organization}</span>
                </div>
                <div className="time">{m.time}</div>
              </div>
              <ul className="resp">
                {m.responsibilities.map((f, i) => {
                  return <li>{f}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="projectsCont">
        <h1>Academic Background</h1>
        <h3>"Empowering growth through knowledge and expertise."</h3>
        <div className="workEx">
          <div className="title">
            <div>Full Stack Web Development Course</div>
            <div className="time">July 2021 - July 2022</div>
          </div>
          <ul className="resp">
            <li>Institute - Pepcoding</li>
            <li>
              Skills learned - React.js, HTML, CSS, JavaScript, Node.js,
              Express.js Database: MongoDB Tools: Git, GitHub, Postman
            </li>
          </ul>
        </div>
        <div className="workEx">
          <div className="title">
            <div>Bachelor of Technology in Computer Science & Engineering</div>
            <div className="time">August 2016 - September 2020</div>
          </div>
          <ul className="resp">
            <li>IILM College of Engineering & Technology</li>
            <li>Abdul Kalam Technical University</li>
            <li>CGPA - 7.5</li>
          </ul>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}
