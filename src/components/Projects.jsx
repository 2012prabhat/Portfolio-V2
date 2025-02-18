import React from 'react'
import './css/Projects.css'
import ProjectsCarousel from './ProjectCarousel'


export default function Projects() {
  return (
    <div className="projectsCont">
     <h1 data-aos="fade-in">What I've Built</h1>
     <h3 data-aos="zoom-in">A showcase of projects where I applied my creativity and technical skills.

</h3>
<br />
<ProjectsCarousel/>
    </div>
   
  )
}
