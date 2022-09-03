import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { switchToPage } from '../Redux/utilsActionCreatore'
import ProductBrief from './ProductBrief'

function ProductBriefPage() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(switchToPage('none-active'))
    },[])
    return (
        <div className="brief-category">
            <p className="Category-info">Daily Essentials for you...</p>
            <hr/>
            <ProductBrief storeName="products" link="/Products/Daily Essentials" />
            <p className="Category-info">Home furnitures for you...</p>
            <hr/>
            <ProductBrief storeName="furnitures" link="/Products/Home Furnitures"/>
        </div>
    )
}

export default ProductBriefPage
