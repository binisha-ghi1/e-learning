import React from 'react'
import navbar from '../../assets/images/navbar.png'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <div>
      <img src={navbar} alt="" className="src" />
      <h1><img src={logo} alt="" className="src" /></h1>

    </div>
  )
}

export default Footer
