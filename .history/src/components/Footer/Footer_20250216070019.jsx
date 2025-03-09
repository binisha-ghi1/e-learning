import React from 'react'
import navbar from '../../assets/images/navbar.png'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-row'>
            <div className='flex-' >
      <img src={navbar} alt="" className="src" />
      <h1><img src={logo} alt="" className="src" /></h1>
      <p>S.T.Tech</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
