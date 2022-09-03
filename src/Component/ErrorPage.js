import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
    return (
        <div className="error-page">
            <h1>Sorry...No page found</h1>
            <Link className="home-btn" to='/'>Home</Link>
        </div>
    )
}

export default ErrorPage
