import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsAction } from '../Redux/dailyEssentialActionCreator'
import Loader from './Loader'
import ProductsHeader from './ProductsHeader'
import NoItems from '../Images/No items.png'
import { fetchFurnitureAction } from '../Redux/furnituresActionCreator'
import EachProduct from './EachProduct'

function ProductContainer({storeName}) {
    const state = useSelector(state=>state[storeName])
    const dispatch = useDispatch()

    useEffect(()=>{
        if(state.filteredItems.length === 0){
            if(storeName==="products"){
                dispatch(fetchProductsAction())
            }else{
                dispatch(fetchFurnitureAction())
            }
        }
    },[])

    if(state.loading){
        return <Loader/>
    }
    return (
        <div className="daily-essential-maincontainer">
            <ProductsHeader storeName={storeName}/>
            {
                state.filteredItems.length === 0
                
                ? 

                <div className="no-result">
                    <div>
                        <img src={NoItems} alt="No resuls" />
                        <h1>No item found</h1>
                        </div>
                    </div> 
                    
                    :
                
                <EachProduct storeName={storeName}/>
            }
            </div>
    )
}

export default ProductContainer
