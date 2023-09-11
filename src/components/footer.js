import "./footerStyle.css"

import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
         <div className="footer-container">
         <div className="left">
         <div className="location">
            <FaHome size={20} style={{color:"FFF",marginRight:"2rem"}}/>
            
              <div>
              <p>Pettai Main Road.</p>
                <p>Alampoondi & Post,Gingee Taluk</p>
                <p>TamilNadu</p>
              </div>
              </div>      
              
            
        <div className="phone">
        <h4><FaPhone size={20} style={{color:"FFF",marginRight:"2rem"}}/>9952047762
        </h4>
        </div>
        <div className="email">
        <h4><FaMailBulk size={20} style={{color:"FFF",marginRight:"2rem"}}/> aswinarun17@gmail.com
        </h4>
        </div>

         
         </div>
         <div className="right">
            <h4>Social Media Platform</h4>
            <div className="social">
            <FaFacebook size={30} style={{color:"FFF",marginRight:"1rem"}}/>
            <FaTwitter size={30} style={{color:"FFF",marginRight:"1rem"}}/>
            <FaLinkedin size={30} style={{color:"FFF",marginRight:"1rem"}}/>
            </div>
         </div>
         </div>
    </div>
   
  )
}

export default Footer