import React from 'react'
import './styles.css'


const CartWidget = ({setCartOpen}) => {
    return (
        <div className="cart-container" onClick={() => setCartOpen(true)}>
            <img src='/assets/images/cart.svg' alt="carrito de compras" className='cart-icon' /> 
        </div>
    )
}

export default CartWidget
