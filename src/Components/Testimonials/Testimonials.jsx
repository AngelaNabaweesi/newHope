import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpeg'
import user_2 from '../../assets/user-2.jpeg'
import user_3 from '../../assets/user-3.jpeg'
import user_4 from '../../assets/user-4.jpeg'

const Testimonials = () => {

    const slider = useRef();

    let tx = 0;

  const slideFoward = () => {
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = () => {
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    
  }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideFoward}/>
        <img src={back_icon} alt="" className='back-btn'onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>The Keris</h3>
                    <span>Hayes, United Kingdom</span>
                  </div>
                  </div>
                  <p>"Partnering with NewHope has been a truly rewarding experience. 
                    Their dedication to uplifting underprivileged children through education is inspiring, and we are proud to support such a vital cause."
                  </p>                
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Community Leader</h3>
                    <span>Kamuli, Uganda</span>
                  </div>
                  </div>
                  <p>"NewHope’s commitment to providing quality education to children in need is unmatched. 
                    We are honored to be part of their mission, helping create a brighter future for so many."
                  </p>
                
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Musembya Family</h3>
                    <span>Kamuli Uganda</span>
                  </div>
                  </div>
                  <p>"Collaborating with NewHope has given us the opportunity to make a real difference in the lives of children and families. 
                    Their growth and positive impact on the community are truly remarkable."
                  </p>                
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Parent</h3>
                    <span>NewHope Nursery and Primary School</span>
                  </div>
                  </div>
                  <p>"We are proud to support NewHope Nursery and Primary School in their mission to empower children through education. 
                    The school’s dedication to serving those in need reflects the values we hold dear."
                  </p>              
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Testimonials