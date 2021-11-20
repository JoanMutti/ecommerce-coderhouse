import React from 'react'
import {useProducts} from '../../hooks/useProducts'
import './styles.css'



const CartWidget = ({setCartOpen}) => {
    const {getCantItems} = useProducts()

    return (
        <div className="cart-container" onClick={() => setCartOpen(true)}>
            <div className="cantidad-items">{getCantItems()}</div>
            <img src='/assets/images/cart.svg' alt="carrito de compras" className='cart-icon' /> 
        </div>
    )
}

export default CartWidget
