import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpeg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>
                {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT NEWHOPE NURSERY AND PRIMARY SCHOOL</h3>
            <h2>Saving the future by serving today</h2>
            <p>At NewHope Nursery and Primary School, 
                we provide not only education but also hope for children and parents who may struggle to afford schooling. 
                Established in 2015 with just 20 pupils, we have grown to serve over 200 students today. 
                Our mission is to empower the next generation through quality education and support, ensuring a brighter future for our community.                
            </p>
            {/* <p>What keeps us going is seeing the children achieve more through high performances in school. Our school
                got 2 first grades in Primary Leaving exams. This is an achievement because we have very few staff. 
                We work hard and pray hard and effectively utilise every little resource we have. 
            </p> */}
            {/* <p>
                Tis performance also ranks us third in the village schools around us. This is another suprising factor
                because most of the schools arond us are private schools. We are therefore grateful to God for blessing
                our mission, to our parents for trusting us with their children, we are also grateful to the staff for working 
                so tirelessly and to the community for continously supporting us.
            </p> */}
        </div>
    </div>
  )
}

export default About