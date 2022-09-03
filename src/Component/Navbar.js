import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaBars, FaWindowClose } from 'react-icons/fa'
import { logoutUser } from '../Redux/utilsActionCreatore'

function Navbar() {
    const [isSidebarOpen, setIsSideBarOpen] = useState(false)
    const numberOfCartItems = useSelector(state => state.cart.numberOfItems)
    const user = useSelector(state => state.utils.loggedUser)
    const dispatch = useDispatch()

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 700) {
                if (isSidebarOpen) {
                    setIsSideBarOpen(false)
                }
            }
            return () => window.removeEventListener('resize')
        })
    })

    const logoutUserHandle = () => {
        if (window.confirm('Are you sure to logout?')) {
            dispatch(logoutUser())
        }
    }

    return (
        <nav>
            <Link to='/' style={{ textDecoration: "none" }}><h1 className="page-title">Z-CART</h1></Link>

            {isSidebarOpen &&
                <>
                    <div className="pagelinks-wrapper" onClick={() => setIsSideBarOpen(false)}>
                    </div>
                    <div className="inner-wrapper">
                        <h1>WELCOME</h1>
                        <FaWindowClose onClick={() => setIsSideBarOpen(false)} className="pagelink-close" />
                        <ul className="pageLinks-mobile">
                            <Link onClick={() => setIsSideBarOpen(false)} to='/'>Home</Link>
                            <Link onClick={() => setIsSideBarOpen(false)} to='/about'>About</Link>
                            <Link onClick={() => setIsSideBarOpen(false)} to='/products'>Products</Link>
                        </ul>
                        <ul className="Extra-menus">
                            <Link to='carts' onClick={() => setIsSideBarOpen(false)}>You cart ({numberOfCartItems} items)</Link>
                            <Link to='/signup' onClick={() => setIsSideBarOpen(false)}>Register</Link>
                            {!user && <Link to='/login' onClick={() => setIsSideBarOpen(false)}>Login</Link>}
                        </ul>
                    </div>
                </>

            }

            <ul className="pageLinks">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/products'>Products</Link></li>
            </ul>

            <ul className="cartlogin">

                <li className='nav-container'>
                    <Link to="/carts">
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                            <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
                        </svg>
                        <div className='amount-container'>
                            <p className='total-amount'>{numberOfCartItems}</p>
                        </div>
                    </Link>
                </li>

                <li>{user ? <div onClick={logoutUserHandle} style={{ "cursor": 'pointer' }}>Sign out</div> : <Link to='/login'>Login</Link>}</li>
                <li className="menu-btn" onClick={() => setIsSideBarOpen(true)}><FaBars /></li>
            </ul>
        </nav>
    )
}

export default Navbar
