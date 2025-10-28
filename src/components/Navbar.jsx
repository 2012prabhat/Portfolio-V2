import React, { useEffect, useState, useRef } from "react";
import "./css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faClose } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [navDis, setNavDis] = useState(false);
  const [theme, setTheme] = props.theme;
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // ✅ to handle active styling
  const navRef = useRef(null);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (navDis) {
      document.querySelector("body").classList.add("navDis");
    } else {
      document.querySelector("body").classList.remove("navDis");
    }
  }, [navDis]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavDis(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navDis]);

  let style = isMobile && navDis ? { width: "" } : { width: "0px" };
  if (!isMobile) style = {};

  // ✅ smooth scroll handler (with offset)
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -60; // adjust for navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id); // ✅ update active section
      setNavDis(false);
    }
  };

  return (
    <nav
      className="navbar"
      ref={navRef}
      style={{ backgroundColor: isScrolled ? "var(--bgCol)" : "transparent" }}
    >
      <div className="navBtnCont" style={style}>
        <div
          className={`nav-link ${activeSection === "home" ? "active" : ""}`}
          onClick={() => handleScrollToSection("home")}
        >
          Home
        </div>
        <div
          className={`nav-link ${activeSection === "services" ? "active" : ""}`}
          onClick={() => handleScrollToSection("services")}
        >
          Services
        </div>
        <div
          className={`nav-link ${activeSection === "resume" ? "active" : ""}`}
          onClick={() => handleScrollToSection("resume")}
        >
          Resume
        </div>
        <div
          className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
          onClick={() => handleScrollToSection("projects")}
        >
          Projects
        </div>
        <div
          className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
          onClick={() => handleScrollToSection("contact")}
        >
          Contact Me
        </div>
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
