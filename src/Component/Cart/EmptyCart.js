import React from 'react'
import {Link} from 'react-router-dom'
import Emptycart from './empty-cart.png'

function EmptyCart() {
    return (
        <div className="empty-cart">
            <img src={Emptycart} alt="" />
            <h1>Your cart is empty</h1>
            <Link to="/Products"><button className="fill-btn">Fill It</button></Link>
        </div>
    )
}

export default EmptyCart
