import React,{useContext, useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { SidebarContext } from '../../contexts/SidebarContext'
import './Cart.css'
import { SlTrash,SlRefresh, SlCheck } from 'react-icons/sl'

const Cart = () => {
    const {open, handleClose} = useContext(SidebarContext)
    const {cart,onReset,onRemove} = (useContext(CartContext))
    const cartPrice = cart.reduce((a,c)=> a+c.qty * c.price, 0);

    return (
        <>
        <div className="cart">
        <div className="carthead">
            <h1>My cart</h1>
            <button onClick={()=>handleClose(false)}>X</button>
        </div>
        {cart.length===0 && <div style={{color:'black'}}>Cart is Empty</div>}
        
        {cart.map(item=>(
            <div className="item" key={item.id}>
                <div className="item-image"><img src={item.image} alt="image" /></div>
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <span>{item.qty} x ${item.price} </span>
                </div>
                <button className='delete' onClick={()=> onRemove(item)}><SlTrash/></button>
            </div>
            ))}
        {cart.length !==0 && (
            <><hr />
                <div className="total">
                    <span>SUBTOTAL:</span>
                    <span>${cartPrice}</span>
                </div>
                <button className='checkout' onClick={()=> alert('Your Order has been Successfully placed !')}>
            <SlCheck/>CHECKOUT</button>
            <button className="reset" onClick={()=> onReset()}><SlRefresh />Reset Cart</button>
            </>
        )}
        </div>
        
    </>
  )
}

export default Cart