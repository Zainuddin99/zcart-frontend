import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function EachProduct({storeName}) {
    const state = useSelector(state=>state[storeName])
    return (
        <div className="daily-essential-container">
                    {

                state.filteredItems.map((item)=>{
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
            </div>
    )
}

export default EachProduct
