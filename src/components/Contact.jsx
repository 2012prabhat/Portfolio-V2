import React,{useState} from 'react'
import "./css/Contact.css"
import { faEnvelope, faPhone, faMapPin, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import emailjs from 'emailjs-com';

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
    try{
      const response = await emailjs.send('service_yamb2qn', 'template_dy58rfo', formData, 'bizYb2sO0695l7E04');
      if(response.status == 200) alert('Email sent successfully','success')
      e.target.reset();
} catch (error) {

  console.error('Error sending email:', error);
  alert('Error sending email', 'error')
}

  };
  return (
    <div className='contactCont'>
      <div className="left">
        <h1>Let's Harmonize Success Together: <br />
        Your Vision, My Expertise</h1>
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
      <div className="right">
      <form className="contact-form" onSubmit={handleSubmit}>
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
      </div>
    </div>
  )
}

export default Contact