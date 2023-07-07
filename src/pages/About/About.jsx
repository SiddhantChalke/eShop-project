import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div style={{ margintop: '11vh',padding: '2rem',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
      <h2 style={{margin:'2rem',fontSize:'3rem',color:'#b7c0c9',}}>About</h2>
      <p style={{fontSize:'2rem'}}><strong style={{fontSize:'2rem'}}>e.SHOP</strong> is a web project developed in React JS and CSS3.</p>
      <p>Built by : Siddhant Chalke</p>
      <div style={{display:'flex',flexDirection:'row',gap:'20rem'}}>
      <p>Resources/ Credits: <br />
        <Link to='https://fakestoreapi.com' style={{textDecoration:'none'}}>API</Link><br />
        <Link to='https://codepen.io/pgalor/pen/OeRWJQ' style={{textDecoration:'none'}}>404 page</Link><br />
        <Link to='https://pexels.com' style={{textDecoration:'none'}}>Stock Images</Link>
      </p>
      <p>Connect with me: <br />Email : siddhantchalke20@gmail.com
        <br /><Link to='https://www.linkedin.com/in/siddhant-chalke-96b627215/' style={{textDecoration:'none'}}>LinkedIn</Link>
        <br /><Link to='https://github.com/SiddhantChalke' style={{textDecoration:'none'}}>Github</Link>
      </p>
      </div>
    </div>
  )
}

export default About