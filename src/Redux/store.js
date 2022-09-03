import { combineReducers, createStore } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { dailyEssentialReducer } from './dailyEssentialReducer'
import { furnitureReducer } from './furnituresReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './cartReducer'
import { utilsReducer } from './utilsReducer'

const rootReducer = combineReducers({
    products: dailyEssentialReducer,
    furnitures: furnitureReducer,
    cart: cartReducer,
    utils: utilsReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;