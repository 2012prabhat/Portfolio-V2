import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import projectData from "./ProjectData";
import { img } from 'framer-motion/client';
import "./css/ProjectScreen.css"


function ProjectScreen() {
    const {id} = useParams();
    const [proData, setProData] = useState([]);
    useEffect(()=>{
        console.log(id)
        console.log(projectData)
        const data = projectData.filter((f)=>f.id==id)[0]
        console.log(data)
        setProData(data); 
    },[id])
  return (
    <>
      <div className="projectsCont ">
      <h1 data-aos="fade-in">Gallery</h1>
      </div>
      <div className="projectScreen imgCont">
      {Array.from({ length: proData?.links?.gallery }, (_, index) => (
        <img src={`${proData.name.replace(/\s+/g, "_")}/(${index + 1}).png`} alt="" />

      ))}
      </div>
    

    </>
  )
}

export default ProjectScreen