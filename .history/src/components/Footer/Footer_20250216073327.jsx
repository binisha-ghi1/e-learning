import React from 'react'
import navbar from '../../assets/images/navbar.png'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-row'>
      
      <img src={navbar} alt="" className="src" />
      <h1><img src={logo} alt="" className="src" /></h1>
      <p>S.T.Tech</p>
      {/* <p>S.T. Tech is an e-learning platform offering<br/> practical, engaging, and accessible courses <br/>designed to help students build skills and<br/> achieve their goals.</p> */}
      
      <h1>About</h1>
      <p>Blog</p>
      <p>AboutUs</p>
      <p>Team</p>
      <p>Instructors</p>
      <p>Privacy Policy</p>
      <p>Terms & Conditions</p>
      <h1>Links</h1>
      <p>Home</p>
      <p>Dashboard</p>
      <p>Faq</p>
      <h1>Programs</h1>
      <h1>Address</h1>


    </div>
    </div>
  )
}

export default Footer
