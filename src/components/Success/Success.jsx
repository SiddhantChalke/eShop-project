import React from 'react'
import './Success.css'

const Success = () => {
  return (
    <div className='success-page'>
        <div className="success-checkmark">
            <div className="check-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
            </div>
        </div>
        <p>Your Order was Successfully placed !</p>
    </div>
  )
}

export default Success