import React from 'react'
import './projectpart.css'
import projectimage1 from '../assests/pexels-stephan-seeber-1261728.jpg'
import projectimage2 from '../assests/pexels-roman-odintsov-4551832.jpg'
import projectimage3 from '../assests/CRUD-application.webp'


const Projectpart = () => {
  return (
    <div className='my-projects'>
        
    <div className='project-part'>
      <div className='project-heading'>
        <p>Static Tourism Webpage Built With  HTML & CSS</p>
      </div>
      <div className='project-images'>
        <img src={projectimage1} ></img>
      </div>
      <div className='project-description'>
         <p>A Simple Static Webpage Created By Using HTML And With CSS And It Also Responsive For All Media Screens.</p>
      </div>
      <div>
        {/* <button className='btn'>Click To View</button> */}
        <a className="btn" href="">Click To View</a>
      </div>
    </div>


    <div className='project-part'>
      <div className='project-heading'>
        <p>Food Recipe Webpage</p>
      </div>
      <div className='project-images'>
        <img src={projectimage2} ></img>
      </div>
      <div className='project-description'>
         <p>The Food Recipe Webpage Is Built Using <span className='highlighter'> HTML,CSS And ReactJS.</span>Get Food recipe details from free <span className='highlighter'>API</span> .By using the details through API,We Can Easily Find out information about the recipes.</p>
      </div>
      <div>
      <a className="btn" href="https://bright-meerkat-387999.netlify.app/">Click To View</a>
      </div>
    </div>


    <div className='project-part'>
      <div className='project-heading'>
        <p>CRUD Application</p>
      </div>
      <div className='project-images'>
        <img src={projectimage3} ></img>
      </div>
      <div className='project-description'>
         <p>By Using <span className='hightlighter'>CRUD</span>operation like Create,Read,Update And Delete The Content Using <span className='highlighter'>ReactJS</span></p>
      </div>
      <div>
        <a className='btn' href="https://stupendous-marzipan-950e3d.netlify.app/">Click To View</a>
      </div>
    </div>


  </div>
  )
}

export default Projectpart