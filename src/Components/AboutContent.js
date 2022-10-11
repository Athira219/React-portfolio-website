import React from 'react'
import "./AboutContent.css"
import { Link } from 'react-router-dom'
import about from '../asets/aboutB.jpg'
import image from '../asets/reactjs.png'


const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>Im a react font-end developer . I create  reponsive secure website</p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
                </Link>

        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={about} className="img" alt="true" />

                </div>
                <div className='img-stack bottom'>
                    <img src={image} className='img' alt="true" />

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
