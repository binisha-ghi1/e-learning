import React from 'react'
import navbar from '../../assets/images/navbar.png'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-row'>
      <div>
        <div>
      <img src={navbar} alt="" className="w-full" />
      <h1><img src={logo} alt="" className="" /></h1>
      <p>S.T.Tech</p>
      <p>S.T. Tech is an e-learning platform offering<br/> practical, engaging, and accessible courses <br/>designed to help students build skills and<br/> achieve their goals.</p>
      </div>
      <div>
      <h1>About</h1>
      <p>Blog</p>
      <p>AboutUs</p>
      <p>Team</p>
      <p>Instructors</p>
      <p>Privacy Policy</p>
      <p>Terms & Conditions</p>
      </div>
      <div>
      <h1>Links</h1>
      <p>Home</p>
      <p>Dashboard</p>
      <p>FAQs</p>
      <p></p>
      <p>Services</p>
      <p>Why Us</p>
      </div>
      <div>
      <h1>Programs</h1>
      <p>IT Courses</p>
      <p>Designing Courses</p>
      <p>Marketing Courses</p>
      <p>Business Courses</p>
      <p>Public Development Courses</p>
      <p>Creative Arts Courses</p>
      </div>
      <div>
      <h1>Address</h1>
      <p>Location</p>
      <p>Call +977 9813000000</p>
      <p>binisha@gmail.com</p>
      <p>Monday-Friday</p>
      </div>
    </div>
    <div className='flex flex-row'>
        <p>FOLLOW US ON</p>
        <p>fb, insta, link</p>

    </div>
    </div>
  )
}

export default Footer
