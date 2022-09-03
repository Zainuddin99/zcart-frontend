import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByCategory, updateCategory } from '../Redux/dailyEssentialActionCreator'
import { filterFurnitureByCategory, updateFurnitureCategory } from '../Redux/furnituresActionCreator'

function SidebarCategories({ storeName }) {
    const state = useSelector(state => state[storeName])
    const dispatch = useDispatch()

    useEffect(() => {
        if (storeName === 'products') {
            dispatch(updateCategory("All categories"))
        } else {
            dispatch(updateFurnitureCategory("All categories"))
        }
    }, [])
    return (
        <ul className="sidebarCategories">
            {
                state.categories.map((item, index) => {
                    return <li key={index} onClick={() => {
                        if (storeName === 'products') {
                            dispatch(filterByCategory(item))
                        } else {
                            dispatch(filterFurnitureByCategory(item))
                        }
                    }}
                        className={state.currentCategory === item ? "active" : ""}>{item}</li>
                })
            }
        </ul>
    )
}

export default SidebarCategories
