import React from 'react'
import { Link } from 'react-router-dom'

function Anauthorized() {
    return (
        <div className='anauthorized-container'>
            <h1>Please login to continue...</h1>
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default Anauthorized
