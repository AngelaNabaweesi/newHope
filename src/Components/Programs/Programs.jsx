import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.jpg'
import program_2 from '../../assets/program_2.jpg'
import farm from '../../assets/recent6.jpeg'
import work from '../../assets/work.png'
import church from '../../assets/church.png'
import farmIcon from '../../assets/farm-icon.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
              <img src={work} alt="" />
              <p>Pupils making brooms</p>
            </div>
        </div>
        <div className="program"> 
            <img src={program_2} alt="" />
            <div className="caption">
              <img src={church} alt="" />
              <p>Having fun while praising</p>
            </div>
        </div>
        <div className="program">
            <img src={farm} alt="" />
            <div className="caption">
              <img src={farmIcon} alt="" />
              <p>Children Garden</p>
            </div>
        </div>

    </div>
  )
}

export default Programs