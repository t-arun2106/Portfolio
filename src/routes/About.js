import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/footer"
import Heroimg2 from '../components/Heroimg2'
import AboutContent from '../components/aboutContent'


const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="About" text="I aspire to gain
valuable industry insights,develop a solid foundation for my future
career."/>
<AboutContent/>
<Footer/> 
    </div>
  )
}

export default About