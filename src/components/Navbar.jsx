import React,{useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom';
import './css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    };
  
    useEffect(() => {
      document.body.className = theme; // Update body class
    }, [theme]);

  
  
  return (
    <nav className="navbar">
    <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
      Home
    </NavLink>
    <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
      Services
    </NavLink>
    <NavLink to="/resume" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
      Resume
    </NavLink>
    <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
      Projects
    </NavLink>
    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
      Contact
    </NavLink>
    <NavLink to="/hire-me" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
      Hire Me
    </NavLink>

    <button className="theme-button" onClick={toggleTheme}>
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
        </button>
  </nav>
  )
}
