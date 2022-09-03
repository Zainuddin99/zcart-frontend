import { useSelector } from "react-redux"
import {Link} from 'react-router-dom'

function CartManager({number, handleCartNumber, callDispatch}) {

    const loggedUser = useSelector(state => state.utils.loggedUser)

    return (
        <div className="cart-manager">
            <div className="cart-buttons">
                <button onClick={()=>handleCartNumber('sub')}>-</button>
                <p>{number}</p>
                <button onClick={()=>handleCartNumber('add')}>+</button>
            </div>
            <button onClick={callDispatch} >{loggedUser ? `Add to cart` : `Login to shop`}</button>
        </div>
    )
}

export default CartManager
