import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/footer"
import Heroimg2 from '../components/Heroimg2'
import Form from "../components/form"

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="Contact" text="Let's Have A Chat"/>
      <Form/>
<Footer/>
    </div>
  )
}

export default Contact