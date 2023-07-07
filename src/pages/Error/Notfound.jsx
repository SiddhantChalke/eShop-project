import React from 'react'
import { Link } from 'react-router-dom'
import './Notfound.css'
import {SlHome} from 'react-icons/sl'

const Notfound = () => {
  return (
    <div className='Error-page'>
        <h2 id='Notfound'>404</h2>
        <p id='error-p'>That page appears to be missing !
            <br />
            Take a ride back <Link to='/' id='error-link'>  <SlHome/> Home</Link>
        </p>
    </div>
  )
}

export default Notfound