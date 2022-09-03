import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsAction } from '../Redux/dailyEssentialActionCreator'
import {fetchFurnitureAction} from '../Redux/furnituresActionCreator'
import Loader from './Loader'

function ProductBrief({storeName, link}) {
    const [arrayList, setArrayList] = useState([])

    const dispatch = useDispatch()
    const array = useSelector(state => state)

    const store = array[storeName]

    useEffect(()=>{
        let list = store.items
        if(list.length !== 0){
    setArrayList(generateRandomList(list))
}
    }, [store])


    useEffect(()=>{
        if(array[storeName].items.length === 0){
        if (storeName === "products") {
            dispatch(fetchProductsAction())
        }else{
            dispatch(fetchFurnitureAction())
        }
    }
    },[])

    const generateRandomList = (a) =>{
        const random = Math.floor(Math.random() * 10)
        let list = []
        for(let i=random;i<random+12;i+=3){
            list.push(a[i])
        }
        return list
    }
    if(array[storeName].loading){
        return <Loader/>
    }
    if(array[storeName].error){
        return <h3 className="brief-images-error">Sorry! Something went wrong</h3>
    }
    // return (
    //     <div className="brief-images-container">
    //         {
    //             arrayList.map((item)=>{
    //                 const {id,image,title, name} = item
    //                 return(
    //                     <div className="brief-images" key={id}>
    //                         <img src={image} alt="" />
    //                         <h4>{title || name}</h4>
    //                     </div>
    //                 )
    //             })
    //         }
            // <div className="brief-images">
            // <Link to={link} style={{textDecoration:"none",padding:"10px 40px", backgroundColor:"lightgreen",color:"black",fontWeight:"bold"}}>Explore More</Link>
            // </div>
    //     </div>
    // )
    return (
        <div className="brief-images-container">
                    {

                arrayList.map((item)=>{
                    const {id, title, price,name, image} = item
                    return(
                    <div className={`daily-essential ${storeName==="furnitures" && 'furnitures'}`} key={id}>
                        <img src={image} alt={title} />
                        <div className="product-info">
                            <p>{title || name}</p>
                            <div>
                            <Link to={`/Products/${storeName}/${id}`} className="details">Details</Link>
                            <p>${price}</p>
                            </div>
                        </div>
                    </div>
                    )
                    })
            }
            <div className="brief-images">
            <Link to={link} style={{textDecoration:"none",padding:"10px 30px", backgroundColor:"lightgreen",color:"black",fontWeight:"bold",width:"fit-content"}}>Explore More</Link>
            </div>
            </div>
    )
}

export default ProductBrief
