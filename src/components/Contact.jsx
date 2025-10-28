import React,{useState} from 'react'
import "./css/Contact.css"
import { faEnvelope, faPhone, faMapPin, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import emailjs from 'emailjs-com';
import { showErrorCard } from './ErrorCard';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }


    const templateParams = {
      "name":formData.name,
      "mob":formData.phone,
      "email":formData.email,
      "message":formData.message
  }
    try{
      const response = await emailjs.send('service_yamb2qn', 'template_dy58rfo', templateParams, 'bizYb2sO0695l7E04');
      if(response.status == 200) showErrorCard('Email sent successfully','success')
      e.target.reset();
} catch (error) {

  console.error('Error sending email:', error);
  showErrorCard('Error sending email', 'error')
}

  };
  return (
    <section className='contactCont' id='contact'>

        <h1 data-aos="zoom-in">Let's Harmonize Success Together: <br />
        Your Vision, My Expertise</h1>

        <div className="myDetails">
        <div className='iconCont'>
        <FontAwesomeIcon className='icon' icon={faEnvelope} /><span>2012prabhat@gmail.com</span>
        </div>

        <div className='iconCont'>
        <FontAwesomeIcon className="icon" icon={faPhone} /><span>+91 9711393310</span>
        </div>
        <div className='iconCont'>
        <FontAwesomeIcon className='icon' icon={faMapPin} /><span>Delhi, India</span>
        </div>
        </div>
        
      
        
    
  
      <form className="contact-form" data-aos="fade-in" onSubmit={handleSubmit}>
      <div className="input-group">
        <FontAwesomeIcon className='icon' icon={faUser} />
        <input
          type="text"
          name="name"
          placeholder="Your Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <FontAwesomeIcon className='icon' icon={faEnvelope} />

        <input
          type="email"
          name="email"
          placeholder="Your Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <FontAwesomeIcon className='icon' icon={faPhone} />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone (optional)"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <textarea
          name="message"
          placeholder="Your Message*"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
      </section>
    
  )
}

export default Contact