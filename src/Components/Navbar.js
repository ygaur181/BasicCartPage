import React from 'react'
import cartIcon from '../images/shopping-cart.png'

function Navbar(props) {
  return (
    <>
        <nav>
            <p>MyCart</p>
            <div>
            <img src={cartIcon} alt="cart_icon" className='navIcon'/>
            <div className='cartCount'>{props.qtySum}</div>
            </div>
        </nav>
    </>
  )
}

export default Navbar