const initialState = {
    items:[],
    numberOfItems: 0,
    total:60
}

export const cartReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD ITEMS TO CART':
        const sameItem = state.items.find((item)=>{
            if(item.productId){
                return item.productId === action.payload.id+''
            }
            return item.id+'' === action.payload.id+''
        })
        if(sameItem){
            const updatedItem = state.items.map((item)=>{
                if(item.id || item.productId === action.payload.id+''){
                    return {...item, cart:item.cart+action.payload.cart}
                }
                return item
            })
            return {...state, items:updatedItem,
                numberOfItems:state.numberOfItems+action.payload.cart,
            total:state.total+(action.payload.cart*action.payload.price)}
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        return{
            ...state, items:[...state.items, action.payload], 
            numberOfItems: state.numberOfItems + action.payload.cart,
            total: state.total + (action.payload.cart * action.payload.price)
        }


        case 'DELETE CART ITEM':
        const deletingItem = state.items.find((item)=>item.id+'' || item.productId === action.payload+'')
        const updatedList = state.items.filter((item)=>{
            if(item.id){
                return item.id+'' !== action.payload+'' 
            }
            return item.productId !== action.payload+''
        })
        return {...state, items:updatedList, numberOfItems:state.numberOfItems - deletingItem.cart,
                total:state.total-(deletingItem.cart * deletingItem.price)}

        case 'UPDATE STORED CARTS':
            const total = action.payload.reduce((acc, current)=>acc+(current.price*current.cart), state.total)
            const numberOfItems = action.payload.reduce((acc, current)=>acc+current.cart, 0)
            return {...state, items: action.payload, numberOfItems, total}

        case 'START LOADING':
        return{
            ...state, loading: true
        }

        case 'STOP LOADING':  
        return {
            ...state, loading: false
        }

        case 'CART ERROR': return {
            ...state, loading: false, errorMessage: action.payload
        }

        case 'CLEAR CART': return initialState

        default: return state
    }
}