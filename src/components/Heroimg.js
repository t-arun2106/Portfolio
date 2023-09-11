
 import React from 'react'
 import IntroImg from "../assests/Imgthree.jpg"
import { Link } from 'react-router-dom'
import './Heroimgstyle.css'
import Arun from "../assests/E-2668.jpg"
 
 const HeroImg = () => {
   return (
     <div className='hero'>
       
        <div className='mask'>
        <div>
            <img className='Arun' src={Arun}></img>
        </div>
          <img src={IntroImg} className='into-img' alt='IntroImg'></img>
        </div>
        <div className='content'>
            <p>HI,I'M A  </p>
            <h1>Front <span className='end'>End</span> Developer</h1>
            <div>
            <Link to="/project" className='btn'>Projects</Link>
            <Link to="/contact" className='btn btn-light'>Contact</Link>
        </div>
        </div>
     
     </div>
   )
 }
 
 export default HeroImg