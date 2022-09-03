import React from 'react'
import { useSelector } from 'react-redux'
import EmptyCart from './EmptyCart'
import '../../Styles/cart.css'
import MyCart from './MyCart'
import {Link} from 'react-router-dom'
import Anauthorized from '../Anauthorized'

function CartPage() {
    const state = useSelector(state => state.cart)
    const utilState = useSelector(state => state.utils)

    if(!utilState.loggedUser){
        return <Anauthorized/>
    }

    if(state.items.length === 0){
        return <EmptyCart/>
    }
    return (
        <>
        <Link to="/Products" className="continue-btn">Continue Shopping</Link>
    <MyCart items={state.items}/>
    </>
    )
}

export default CartPage
