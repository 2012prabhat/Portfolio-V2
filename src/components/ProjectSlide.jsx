import React from "react";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

export default function ProjectSlide(props) {
  const toolTipStyle = {
    backgroundColor: "var(--activeCol)", // Change to your desired color
    color: "var(--textCol)",
    fontWeight:"bolder"
  }
  return (
    <div className="projectData">
      <a className="projectCard">
        <div className="imgDiv">
          <img src={props.proImg} alt="" />
        </div>
        <div className="nameDiv">{props.proName}</div>
      </a>
      <div className="proDesc">
        <div>
          {props.proName}: {props.heading}
        </div>
        <br />
        <div><b>Overview:</b> {props.overview}</div>
        <br />
        <div><b>Key Features :-</b></div>

        <div className="featuresCont">
          <div>
            <ul>
              {props.features.map((m, i) => {
                if (i < props.features.length / 2) return <li key={i}>{m}</li>;
              })}
            </ul>
          </div>

          <div>
            <ul>
              {props.features.map((m, i) => {
                if (i >= props.features.length / 2) return <li key={i}>{m}</li>;
              })}
            </ul>
          </div>
        </div>


        <div className="bottomCont">
        <div className="techStack">
          <div><b>Tech Stack :-</b> </div>
          <br />
          <div className="techImgCont">
            {props.techStack.map((m, i) => {
              return (
                <>
                  <img data-tooltip-id={`tooltip-${m.name}`} key={i} src={m.img} alt="skill"/>
                  <Tooltip style={toolTipStyle} id={`tooltip-${m.name}`} content={<div className="tooltip">{m.name}</div>} />
                </>
              );
            })}
          </div>
        </div>
        <div className="techStack">
          <div><b>Links :-</b> </div>
          <br />
          <div className="techImgCont">
                  <a href="" target="_blank">
                  <img data-tooltip-id="tooltip-1" src="/Skills/github.svg" alt="" />
                  <Tooltip style={toolTipStyle} id="tooltip-1" content={<div>Github</div>} />
                  </a>
                  <a href={props.link.live} target="_blank">
                  <img data-tooltip-id="tooltip-2" src="/Skills/globe.svg" alt="" />
                  <Tooltip style={toolTipStyle} id="tooltip-2" content={<div>Live</div>} />
                  </a>
                  <a href="" target="_blank">
                  <img data-tooltip-id="tooltip-3" src="/Skills/gallery.svg" alt="" />
                  <Tooltip style={toolTipStyle} id="tooltip-3" content={<div>Screens</div>} />
                  </a>
                  
            
          </div>
        </div>

        </div>
        


      </div>
    </div>
  );
}
