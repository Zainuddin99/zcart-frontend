import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import { fetchProductsAction } from '../../Redux/dailyEssentialActionCreator'
import { fetchFurnitureAction} from '../../Redux/furnituresActionCreator'
import Loader from '../Loader'
import '../../Styles/products-details.css'
import {Link, useHistory} from 'react-router-dom'
import CartManager from './CartManager'
import { addItemsToCart } from '../../Redux/cartReducerActionCreator'

function ProductDetails() {
    const {id, storeName} = useParams()
    const state = useSelector(state=>state?.[storeName])
    const loggedUser = useSelector(state => state.utils.loggedUser)
    const dispatch = useDispatch()
    const [pageItem, setPageItem] = useState({})
    const history = useHistory()

    useEffect(()=>{
        if(storeName === "furnitures"){
            if(state.items.length===0){
            dispatch(fetchFurnitureAction())
            }
            const myItem = state.items.find((item)=>item.id === id)
            myItem ? setPageItem(myItem) : setPageItem({})
        }else{
            if(state.items.length===0){
            dispatch(fetchProductsAction())
            }
            const myItem = state.items.find((item)=>item.id === parseInt(id))
            myItem ? setPageItem(myItem) : setPageItem({})
        }
        setPageItem((prev)=>{
            prev.cart = 1
            return prev
        })
    },[state.items])

    if(state.loading){
        return <Loader/>
    }

    const handleCartNumber = (type) =>{
        if(type === "add"){
            if(pageItem.cart < 3){
            setPageItem((prev)=>{
                return {...prev, cart:prev.cart+1}
            })
        }
        }else{
            if(pageItem.cart > 1){
            setPageItem((prev)=>{
                return {...prev, cart:prev.cart-1}
            })
        }
        }
    }

    const callDispatch = () =>{
        if(loggedUser){
        dispatch(addItemsToCart(pageItem))
        history.push('/carts')
        }else{
            history.push('/login')
        }
    }

    const {image, name, title, description, price,category, company} = pageItem

    return (
        <>
        <Link className="back-home" to={`/Products/${storeName==="products" ? 'Daily Essentials' : 'home furnitures'}`}>Back to Products</Link>
        <div className="product-details">
            <div className="images">
                <img src={image} alt="Product"/>
            </div>
            <div className="product-full-info">
                <h1>{name || title}</h1>
                <p className="price">${price}</p>
                <div className="sub-info">
                    <p>Availability : <span>In Stock</span></p>
                    {company && <p>Brand : <span>{company}</span></p>}
                    <p>Category : <span>{category}</span></p>
                    </div>
                    <p className="desc"><span>Description</span> : {description}</p>

                    <CartManager number={pageItem.cart} handleCartNumber={handleCartNumber} callDispatch={callDispatch}/>

            </div>
        </div>
        </>
    )
}

export default ProductDetails
