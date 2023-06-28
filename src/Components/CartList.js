import React from 'react'
import plus from '../images/plus.png'
import minus from '../images/minus.png'
import del from '../images/delete.png'
import food from '../images/Food.jpg'
import '../App.css'

function CartList(props){

  return (
    <>
        <div className="cart_border">
            <div className="left_section">
                <img src={food} alt="Product" />
            </div>
            <div className="right_section">
                <p className="heading">{props.prod.Name}</p>
                <p className="price">Rs. {props.prod.Price}</p>
                <div className="cartButtons">
                    <img src={plus} alt="increase" className='cart_icon' onClick={() => props.onIncrease(props.prod)}/>
                    <span className="qty">{props.prod.qty}</span>
                    <img src={minus} alt="decrease" className='cart_icon' onClick={() => props.onDecrease(props.prod)} />
                  <img src={del} alt="delete" className='cart_icon' onClick={() => props.onDelete(props.prod.id)}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default CartList