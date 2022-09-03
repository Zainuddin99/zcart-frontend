import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function MainCategories() {
    const pageActiveState = useSelector(state => state.utils)
    return (
        <div className="main-categories">
            <Link to="/Products/Daily Essentials" className={pageActiveState.dailyEssential}>Daily Essentials</Link>
            <Link to="/Products/Home Furnitures" className={pageActiveState.homeFurnitures}>Home furnitures</Link>
        </div>
    )
}

export default MainCategories
