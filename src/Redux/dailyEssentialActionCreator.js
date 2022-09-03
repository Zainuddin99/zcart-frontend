export const fetchProductList = () => {
    return {
        type: 'FETCH PRODUCT'
    }
}

export const fetchProductSuccess = (items) => {
    return {
        type: 'FETCH SUCCESS',
        payload: items
    }
}

export const fetchProductFail = (error) => {
    return {
        type: 'FETCH FAIL',
        payload: error
    }
}

export const fetchProductsAction = () => {
    return dispatch => {
        dispatch(fetchProductList())
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                dispatch(fetchProductSuccess(json))
            }).catch(error => dispatch(fetchProductFail(error)))
    }
}

export const filterItems = () =>{
    return { 
        type: 'FILTER ITEMS'
    }
}

export const updateInput = (value) =>{
    return{
    type: 'UPDATE INPUT',
    payload: value
    }
}

export const filterByInput = (value) =>{
    return dispatch =>{
        dispatch(updateInput(value))
        dispatch(filterItems())
    }
}

export const updateCategory = (data) =>{
    return {
        type: 'UPDATE CATEGORY',
        payload: data
    }
} 

export const filterByCategory = (data) =>{
    return dispatch =>{
        dispatch(updateCategory(data))
        dispatch(filterItems())
    }
}

export const updatePrice = (input) =>{
    return {
        type: 'UPDATE PRICE',
        payload: input
    }
}

export const filterByPrice = (i)=> {
    return dispatch =>{
        dispatch(updatePrice(i))
        dispatch(filterItems())
    }
}

