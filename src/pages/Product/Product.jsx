import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../contexts/ProductContext'
import { CartContext } from '../../contexts/CartContext'
import './Product.css'
import { SlHeart } from 'react-icons/sl'

const Product = () => {
  const {id} = useParams()
  const {products} = useContext(ProductContext)
  const {addToCart,onRemove} = useContext(CartContext)

  const product = products.find(item =>{
    return item.id == parseInt(id);
    // return String(item.id) === id;
  })
  // console.log(product)

  const {title, description, price, image} = product
  return (
    <div className="product-page">
      <div className="image"><img src={image} alt="" /></div>
      <div className="info">
        <strong>{title}</strong>
        <p id='descript'>{description}</p>
        <div className="product-price">
          <button onClick={()=> addToCart(product)}>+</button>
            <p>${price}</p>
          <button onClick={()=> onRemove(product)}>-</button>
        </div>
        <div className="add-cart">
        <button onClick={()=> addToCart(product)}><SlHeart/> Add to Cart</button>
        </div>
      </div>
    </div>
    
  )
}

export default Product