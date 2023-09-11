import "./aboutContent.css"

import React from 'react'
import {Link} from "react-router-dom"
import react1 from "../assests/react1.jpg"
import react2 from "../assests/react2.webp"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Familiar With Front End Libraries Like React.Proper Knowledge In Creation Of Responsive & Secure Websites For My Clients.  </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-containers">
            <div className="img-stack-top">
                <img src={react1} className="img" alt="img-stack-one"/>
            </div>
            <div className="img-stack bottom">
                <img src={react2} className="img" alt="img-stack-one"/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent