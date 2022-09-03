import React, { useEffect } from 'react'
import ProductContainer from '../ProductContainer'
import Sidebar from '../Sidebar'
import '../../Styles/products-page.css'
import { useDispatch } from 'react-redux'
import { switchToPage } from '../../Redux/utilsActionCreatore'

function HomeFurnituresPage() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(switchToPage("furnitures"))
    }, [])
    return (
        <div className="DailyEssentialPage">
            <Sidebar storeName="furnitures"/>
            <ProductContainer storeName="furnitures"/>
        </div>
    )
}

export default HomeFurnituresPage