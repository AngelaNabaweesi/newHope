import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white_arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "77533681-8675-47d5-bce6-cf216a1984ef");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>
            We’d love to hear from you! Whether it’s a compliment, a donation to support our mission, 
            or valuable information to help us improve, your feedback means the world to us. 
            Together, we can make a greater impact for our pupils.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" /> robert123@gmail.com</li>
                <li><img src={phone_icon} alt="" /> +256 751 743 480</li>
                <li><img src={location_icon} alt="" /> Kamuli, Namasagali <br/>Uganda</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name'
                required/>
                <label>Phone Number</label>
                <input type="tel" name='phone'placeholder='Enter your phone number'
                required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message'
                required></textarea>
                <button type="submit" className='btn dark-btn'>Submit now
                    <img src={white_arrow} alt="" />
                </button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact