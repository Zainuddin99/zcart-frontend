import React from 'react'
import {Link} from 'react-router-dom'

function Pagepath(props) {
    return (
        <h1 className="pagepath"><Link to='/'>Home</Link> / <Link to={`/${props.path}`}>{props.path}</Link></h1>
    )
}

export default Pagepath
