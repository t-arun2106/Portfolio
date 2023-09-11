import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/footer"
import Heroimg2 from '../components/Heroimg2'
import Projectpart from './project_part'


const Project = () => {
  return (
    <div>
<Navbar/>
<Heroimg2 heading="PROJECTS" text="Some Of My Most Recent Works"/>
<Projectpart/>
<Footer/>
    </div>
  )
}

export default Project