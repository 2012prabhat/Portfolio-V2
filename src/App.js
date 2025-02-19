import './App.css';
import Navbar from './components/Navbar';
import Routing from './components/Routing';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset:110,
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="App">
        <Routing/>
    </div>
  );
}

export default App;
