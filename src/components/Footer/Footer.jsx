import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <hr />
      <div className="top">
        <p><Link to='/' id='links'>Womens</Link></p>
        <p><Link to='/' id='links'>Mens</Link></p>
        <p><Link to='/' id='links'>Childrens</Link></p>
        <p><Link to='/' id='links'>Shops</Link></p>
        <p><Link to='/' id='links'>Customers</Link></p>
        <p><Link to='/' id='links'>Privacy Policy</Link></p>
        <p><Link to='/' id='links'>About Us</Link></p>
        <p><Link to='/' id='links'>Return Policy</Link></p>
        <p><Link to='/' id='links'>Our Partners</Link></p>
      </div>
      <div className="bottom">
          <strong>e.SHOP</strong>
          <span className='copyright'>&copy; Made by Siddhant 2023</span>
      </div>
    </div>
  )
}

export default Footer