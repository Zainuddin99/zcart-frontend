import React, { useEffect } from 'react'
import ProductContainer from './ProductContainer'
import Sidebar from './Sidebar'
import '../Styles/products-page.css'
import { useDispatch } from 'react-redux'
import { switchToPage } from '../Redux/utilsActionCreatore'

function DailyEssentialPage() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(switchToPage("products"))
    }, [])
    return (
        <div className="DailyEssentialPage">
            <Sidebar storeName="products"/>
            <ProductContainer storeName="products"/>
        </div>
    )
}

export default DailyEssentialPage
