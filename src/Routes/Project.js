import React from 'react'
import NavBar from '../Components/NavBar'

import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import PricingCard from '../Components/PricingCard'
import Work from '../Components/Work'


const Project = () => {
  return (
    <div>
      <NavBar/>
      <Heroimg2 heading="PROJECTS." text="Some of my recent works"/>
      <Work/>
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project
