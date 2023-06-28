import React from 'react'

function Footer(props) {
  return (
    <>
    <div className="footer">
        TOTAL : {props.totalPrice}
    </div>
    </>
  )
}

export default Footer