import React from "react";


import ProjectSlide from "./ProjectSlide";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./css/ProjectCarousel.css"
import projectData from "./ProjectData";



function Projects() {


  return (
    <section className="projects">
      <div className="proCont">

<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >

    {projectData?.map((m,i)=>{
 return <SwiperSlide>
 <ProjectSlide
   proImg={m.img}
   proName={m.name}
   heading = {m.heading}
   overview={m.overview}
   features={m.features}
   techStack={m.techStack}

   />
 </SwiperSlide>
    })
     
}
    </Swiper>
        
      </div>
    </section>
  );
}

export default Projects;