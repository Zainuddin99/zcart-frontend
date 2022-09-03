import React from 'react'
import { connect } from 'react-redux'

function ProductsHeader({state}) {
    return (
        <div className="products-header">
            <p>{state.currentCategory}</p>
            <p>{state.filteredItems.length} Results found</p>
        </div>
    )
}

const mapStateToProps = (state, ownProps) =>{
    return {
        state: state[ownProps.storeName]
    }
}

export default connect(mapStateToProps)(ProductsHeader)
