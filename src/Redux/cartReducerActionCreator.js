import { addItemsToCartAPI, deleteCartItemAPI, getCartItemsAPI } from "../api"
import { openModal } from "./utilsActionCreatore"

export const addItemsToCartClient = (item) =>{
    return{
        type: 'ADD ITEMS TO CART',
        payload: item
    }
}

export const addItemsToCart = (item) =>{
    return async(dispatch) => {
        try{
        dispatch(addItemsToCartClient(item))
        await addItemsToCartAPI(item)
        }catch(err){
            if(err.response){
            return dispatch(openModal(err.response.data.message))
            }
            return dispatch(openModal('Something went wrong...Your task not achieved'))
        }
    }
}

const deleterCartItemClient = (id) =>{
    return {
        type: 'DELETE CART ITEM',
        payload:id
    }
}

export const deleterCartItem = (id) =>{
    return dispatch =>{
        dispatch(deleterCartItemClient(id))
        try{
            deleteCartItemAPI(id)
        }catch(err){
            if(err.response){
            return dispatch(openModal(err.response.data.message))
            }
            return dispatch(openModal('Something went wrong...Your task not achieved'))
        }
    }
}

export const updateStoredCartClient = (cart) =>{
    return {
        type: 'UPDATE STORED CARTS',
        payload:cart.carts
    }
}

export const updateStoredCart = () =>{
    return async(dispatch) =>{
        try{
        const response = await getCartItemsAPI()
        dispatch(updateStoredCartClient(response.data.result))
        }catch(err){
            console.log(err);
        }
    }
}

export const clearStoredCart = () =>{
    return {
        type: 'CLEAR CART'
    }
}