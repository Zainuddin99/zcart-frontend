import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByPrice } from '../Redux/dailyEssentialActionCreator'
import { filterFurnitureByPrice } from '../Redux/furnituresActionCreator'

function SidebarPrice({ storeName }) {
    const dispatch = useDispatch()

    const [rupees, setRupees] = useState(0)

    const state = useSelector(state => state[storeName])
    const items = state.items

    useEffect(() => {
        const a = new Set(items.map((item) => item.price))
        const b = Array.from(a)
        const max = Math.max(...b)
        setRupees(max)
        if (storeName === "products") {
            dispatch(filterByPrice(max))
        } else {
            dispatch(filterFurnitureByPrice(max))
        }
    }, [items])

    return (
        <div className="sidebarPrice">
            <h4>Price</h4>
            <p>Rs. {state.currentPrice}</p>
            <input type="range" min="0" max={rupees} value={state.currentPrice} onChange={(e) => {
                if (storeName === 'products') {
                    dispatch(filterByPrice(e.target.value))
                } else {
                    dispatch(filterFurnitureByPrice(e.target.value))
                }
            }} />
        </div>
    )
}

export default SidebarPrice
