import React, { useState } from "react";
import "./css/ProjectCarousel.css";

const projects = [
  { id: 1, title: "Care Buddy", image: "https://via.placeholder.com/150" },
  { id: 2, title: "Global Survey Solutions", image: "/Projects/Gss/gss.png" },
  { id: 3, title: "Project 3", image: "https://via.placeholder.com/150" },
  { id: 4, title: "Project 4", image: "https://via.placeholder.com/150" },
  { id: 5, title: "Project 5", image: "https://via.placeholder.com/150" },
  { id: 6, title: "Project 6", image: "https://via.placeholder.com/150" },
];

const ProjectsCarousel = () => {
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);

  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextPage = () => {
    if (page < totalPages - 1) {
      setAnimating(true);
      setTimeout(() => {
        setPage((prev) => prev + 1);
        setAnimating(false);
      }, 500);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setAnimating(true);
      setTimeout(() => {
        setPage((prev) => prev - 1);
        setAnimating(false);
      }, 500);
    }
  };

  return (
    <div className="carousel-container">
      <div className={`carousel ${animating ? "slide" : ""}`}>
        {projects.slice(page * projectsPerPage, (page + 1) * projectsPerPage).map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="card-content">{project.title}</div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={page === 0}>Prev</button>
        <button onClick={nextPage} disabled={page === totalPages - 1}>Next</button>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
