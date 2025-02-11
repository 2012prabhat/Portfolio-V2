import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faClose } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [navDis, setNavDis] = useState(false);
  const [theme, setTheme] = props.theme;
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme; // Update body class
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let style = isMobile && navDis ? { width: "" } : { width: "0px" };
  if (!isMobile) style = {};

  return (
    <nav className="navbar" style={{ backgroundColor: isScrolled ? "var(--bgCol)" : "transparent" }}>
      <div className="navBtnCont" style={style}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Home
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Services
        </NavLink>
        <NavLink to="/resume" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Resume
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Contact Me
        </NavLink>
        {/* <NavLink to="/hire-me" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Hire Me
        </NavLink> */}
      </div>
      <button className="theme-button" onClick={toggleTheme}>
        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
      </button>
      <button className="theme-button navMobBtn" onClick={() => setNavDis(!navDis)}>
        {navDis ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
      </button>
    </nav>
  );
}
