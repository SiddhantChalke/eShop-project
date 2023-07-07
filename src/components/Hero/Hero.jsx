import React from 'react'
import './Hero.css'
import {Link} from 'react-router-dom'
import img01 from '../../assets/img01.jpg'
import { SlPaperPlane } from 'react-icons/sl'

const Hero = () => {
    const img = 'https://www.pexels.com/photo/woman-in-pink-sweater-and-denim-skirt-1127000/'
  return (
    <div className='hero'>
      <div className="container">
        <span className='hero-span'>New Arrivals</span>
        <h1 className='hero-h1'>Get the latest <br /> in fashion</h1>
        <Link to={'/'} id='link'>Discover More <SlPaperPlane/> </Link>
      </div>
    </div>
  )
}

export default Hero