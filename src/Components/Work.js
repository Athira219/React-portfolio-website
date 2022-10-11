import React from 'react'
import  './WorkCard.css'
import WorkCard from './WorkCard'
import Workdata from './Workdata'

const Work = () => {
  return (
    
    <div className='wok-container'>
    <h1 className='project-heading'>Project</h1>
    <div className='project-container'>
       {Workdata.map((val,ind)=>{
        return(
            <WorkCard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title} 
            text={val.text}
            view={val.view}/>
        )
       })}

    </div>
  
</div>

        
      
    
  )
}

export default Work
