import React from 'react'

export default function ProjectSlide(props) {
  return (
    <div className="projectData">
          <a  className="projectCard">
            <div className="imgDiv">
             
                <img src={props.proImg} alt="" />
              
            </div>
            <div className="nameDiv">{props.proName}</div>
          </a>
          <div className="proDesc">
            <div>{props.proName}: {props.heading}</div>
            <br />
            <div>
              Overview: {props.overview}
            </div>
            <br />
            <div>Key Features :-</div>

            <div className="featuresCont">
              <div>
               <ul>
               {(props.features).map((m,i)=>{
                 if (i<props.features.length/2)  return  <li key={i}>{m}</li>
                })}
               </ul>
               
              </div>

              <div>
                <ul>
                {(props.features).map((m,i)=>{
                 if (i>=props.features.length/2)  return  <li key={i}>{m}</li>
                })}
                </ul>
            
              </div>
            </div>

            <br />
            <div className="techStack">
              <div>Tech Stack :- </div>
              <br />
              <div>
                {(props.techStack).map((m,i)=>{
                    return  <img key={i} src={m} />
                })}
              </div>
            </div>
          </div>
        </div>
  )
}