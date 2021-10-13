import React from 'react'
import carrito from '../../assets/images/carrito-de-compras.png'
import './styles.css'


const CartWidget = () => {
    return (
        <div className="cart-container">
            <img src={carrito} alt="carrito de compras" className='cart-icon' /> 
        </div>
    )
}

export default CartWidget
