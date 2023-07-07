import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => {
  const itemId = props.id;
  const item = props.item;
  return (
    <Link className='link' to={`/product/${itemId}`} >
      <div className="card" key={itemId}>
        <div className="image">
          <img src={item.image} alt="" className="mainImg" />
        </div>
        <h2>{item.title}</h2>
        <h3 className='card-price'>${item.price}</h3>
        
      </div>
    </Link>
    
  )
}

export default Card