import React from 'react'
import navbar from '../../assets/images/navbar.png'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-row'>
            <div className=' flex flex-col' >
      <img src={navbar} alt="" className="src" />
      <h1><img src={logo} alt="" className="src" /></h1>
      <p>S.T.Tech</p>
      <p>S.T. Tech is an e-learning platform offering practical, engaging, and accessible courses designed to help students build skills and achieve their goals.</p>
      </div>

    </div>
    </div>
  )
}

export default Footer
