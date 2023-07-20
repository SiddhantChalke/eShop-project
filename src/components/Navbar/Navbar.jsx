import React, {useState ,useContext,useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { SidebarContext } from '../../contexts/SidebarContext'
import { CartContext } from '../../contexts/CartContext'
import Cart from '../Cart/Cart'
import Search from '../Search/Search'
import {SlBag, SlMagnifier} from 'react-icons/sl'

const Navbar = () => {
  const {open, setOpen} = useContext(SidebarContext)
  const {cartCount} = useContext(CartContext)
  const [isSearched, setIsSearched] = useState(false);

  // let divRef = useRef();
  // useEffect(()=>{
  //   let handler = (e)=>{
  //     if(!divRef.current?.contains(e.target)){
  //       setIsSearched(false)
  //     }
  //   }
  //   document.addEventListener('mousedown', handler);
  //   return ()=> document.removeEventListener('mousedown', handler)
  // })

  return (
    <div className="navbar">
      <div className="left">
          <div className="bar-item">
              <Link to='/products/Women' className='link'>Women</Link>
          </div>
          <div className="bar-item">
              <Link to='/products/Men' className='link'>Men</Link>
          </div>
          <div className="bar-item">
              <Link to='/about' className='link'>About</Link>
          </div>
      </div>
      <div className="center">
              <Link to='/http://SiddhantChalke.github.io/eShop-project' className='link' style={{color: 'black'}}>e.SHOP</Link>
      </div>
      <div className="right">
        <div className="search" onClick={()=> setIsSearched(!isSearched)}>
          <SlMagnifier />
        </div>
        <div className="cart-icon" onClick={()=> setOpen(!open)}>
          <SlBag />
          {   cartCount ? (
                    <span className='badge'>{cartCount}</span>
                ):(
                    ''
                )
            }
        </div>
      </div>
      {open && <Cart />}
      {isSearched && <Search />}
  </div>
  )
}

export default Navbar