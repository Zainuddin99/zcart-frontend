export const fetchFurnitureList = () => {
    return {
        type: 'FETCH FURNITURE'
    }
}

export const fetchFurnitureSuccess = (items) => {
    return {
        type: 'FETCH FURNITURE SUCCESS',
        payload: items
    }
}

export const fetchFurnitureFail = (error) => {
    return {
        type: 'FETCH FURNITURE FAIL',
        payload: error
    }
}

export const fetchFurnitureAction = () => {
    return dispatch => {
        dispatch(fetchFurnitureList())
        fetch('https://course-api.com/react-store-products')
            .then(res => res.json())
            .then(json => {
                dispatch(fetchFurnitureSuccess(json))
            }).catch(error => dispatch(fetchFurnitureFail(error)))
    }
}

export const filterFurnitureItems = () =>{
    return { 
        type: 'FILTER FURNITURE ITEMS'
    }
}

export const updateFurnitureInput = (value) =>{
    return{
    type: 'UPDATE FURNITURE INPUT',
    payload: value
    }
}

export const filterFurnitureByInput = (value) =>{
    return dispatch =>{
        dispatch(updateFurnitureInput(value))
        dispatch(filterFurnitureItems())
    }
}

export const updateFurnitureCategory = (data) =>{
    return {
        type: 'UPDATE FURNITURE CATEGORY',
        payload: data
    }
} 

export const filterFurnitureByCategory = (data) =>{
    return dispatch =>{
        dispatch(updateFurnitureCategory(data))
        dispatch(filterFurnitureItems())
    }
}

export const updateFurniturePrice = (input) =>{
    return {
        type: 'UPDATE FURNITURE PRICE',
        payload: input
    }
}

export const filterFurnitureByPrice = (i)=> {
    return dispatch =>{
        dispatch(updateFurniturePrice(i))
        dispatch(filterFurnitureItems())
    }
}