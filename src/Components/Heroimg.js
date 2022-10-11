import React from 'react'
import './Heroimg.css'
import { Link} from "react-router-dom"
import photo from '../asets/websitenew.jpg'

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={photo} alt="photo" />

        </div>
        <div className='content'>
            <p> Hi..... Iam Athira</p>
            <h1> React Developer</h1>
            
                <Link to="/project"  className="btn">Project</Link>
                <Link to="/contact"  className="btn btn-light">Contact</Link>
                <div>
            </div>

        </div>
      
    </div>
  )
}

export default Heroimg


