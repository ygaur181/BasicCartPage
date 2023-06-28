import React from 'react'
import CartList from './CartList'

function Cart(props) {

  return (
    <>
        <div className="cartArea">
            {
            props.products.map((items) => {
                return <CartList prod = { items } onDelete = {props.onDeleteItems} onIncrease = {props.onIncreaseItems} onDecrease = {props.onDecreaseItems}/>
            })}
        </div>
    </>
  )
}

export default Cart