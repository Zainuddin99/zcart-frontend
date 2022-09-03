import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByInput } from '../Redux/dailyEssentialActionCreator'
import { filterFurnitureByInput } from '../Redux/furnituresActionCreator'

function Search({ storeName }) {
    const input = useSelector(state => state[storeName].searchInput)
    const dispatch = useDispatch()

    return (
        <form action="" className="sidebarSearch" onSubmit={(e) => e.preventDefault()}>
            <input type="text" value={input} onChange={(e) => {
                if (storeName === "products") {
                    dispatch(filterByInput(e.target.value))
                } else {
                    dispatch(filterFurnitureByInput(e.target.value))
                }
            }
            } placeholder="Search products" />
        </form>
    )
}

export default Search
