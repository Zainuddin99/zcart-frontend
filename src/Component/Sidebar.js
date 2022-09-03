import React, { useEffect, useRef, useState } from 'react'
import Search from './Search'
import SidebarCategories from './SidebarCategories'
import SidebarPrice from './SidebarPrice'
import '../Styles/sidebar.css'
import { useSelector } from 'react-redux'
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'

function Sidebar({storeName}) {
    const state = useSelector(state=>state[storeName])
    const [open, setOpen] = useState(true)

    const handleClick = () =>{
        setOpen(!open)
    }

    useEffect(()=>{
        setOpen(false)
    },[])

    return (
        <aside>
            { open &&
            <div className="mobile-whole-wrapper" onClick={()=>setOpen(false)}>
            </div>
            }
            <Search storeName={storeName}/>
            <p className={`mobile-filter-btn ${open && 'active'}`} onClick={handleClick}>Filter : <span>{state.currentCategory}</span><span>${state.currentPrice}</span>
            {open ? <FaAngleUp/> : <FaAngleDown/>}</p>
            <div className="wrapper">
            <div className={`mobile-section ${open && 'active'}`} >
            <SidebarCategories storeName={storeName}/>
            <SidebarPrice storeName={storeName}/>
            </div>
            </div>
        </aside>
    )
}

export default Sidebar
