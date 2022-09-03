import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {FaTrash} from 'react-icons/fa'
import { deleterCartItem } from '../../Redux/cartReducerActionCreator'

function MyCart({items}) {
    const state = useSelector(state => state.cart)
    const dispatch = useDispatch()

    return (
        <div className="mycart-container">
            <div className="cart-heading" key='cart-heading'>
                <h5>Items</h5>
                <h5>Price</h5>
                <h5>Quantity</h5>
                <h5>Sub total</h5>
            </div>
            <hr />
            {
                items.map((item)=>{
                    const {title,name,image, cart, price,id, productId} = item
                    return(
                        <>
                        <div className="mycart" key={id}>
                            <div className="item-info">
                                <div className="image">
                                    <img src={image} alt="" />
                                </div>
                                
                                <p>{title || name}</p></div>
                            <p>${price}</p>
                            <p>{cart}</p>
                            <p>${(price*cart).toFixed(2)}</p>
                            <p className="close" onClick={()=>dispatch(deleterCartItem(id || productId))}><FaTrash/></p>
                        </div>
                        <hr key={id+"copy"} />
                        </>
                    )
                })
            }
            <div className="final-cart" key='final-cart'>
                <p>Total Items <span>{state.numberOfItems}</span></p>
                <p>Shipping Charge <span>$60.00</span></p>
                <hr />
                <p>Total Amount <span>${(state.total).toFixed(2)}</span></p>
            </div>
        </div>
    )
}

export default MyCart
