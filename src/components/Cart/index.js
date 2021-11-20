import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useProducts} from '../../hooks/useProducts'
import ItemCount from '../ItemCount'
import './styles.css'

function Cart() {
    const {products, getSubtotal, addOne, removeOne, removeProduct} = useProducts()
    const history = useHistory()


    const handleCountClick = (e, productId) => {
        if(e.target.id === 'plus'){
            addOne(productId)
        }else if(e.target.id === 'minus' && products.find(ele => ele.product.id === productId).count > 1){
            removeOne(productId)
        }
    } 

    return (
        <div className='cart-container-out'>
            <h2>Mi carrito</h2>
            {products.length > 0 ?
                <div className="cart-container-in">
                    <div className="left-side-cart">
                        {products.map(({product, count}) => {
                            return (
                            <div className="product-in-cart" key={product.id} >
                                <img src={product.pictureUrl} alt={product.name} onClick={() => history.push(`/item/${product.id}`)}/>
                                <div className="product-details-cart">
                                    <p className="cart-product-name">{product.title}</p>
                                    <ItemCount count={count} onClickCount={handleCountClick} product={product.id}/>
                                </div>
                                <p className="price-product-wq">$ {product.price.toLocaleString('en-US')}</p>
                                <button className='btn-comprar delete-product' onClick={() => removeProduct(product)}>Eliminar producto</button>
                            </div>
                            )
                        })}
                    </div>
                    <div className="right-side-cart">
                        <h3>Resumen de compra</h3>
                        <div className="summary-item">
                            <p>Subtotal</p>
                            <p>$ {getSubtotal()}</p>
                        </div>
                        <div className="summary-item">
                            <p className="total">Total</p>
                            <p className="total">$ {getSubtotal()}</p>
                        </div>
                        <button className='btn-comprar pagar'>Pagar</button>
                    </div>
                </div>
            :
                    <div className='no-products'>
                        <p>No tenes ningun producto en tu carrito</p>
                        <div className='btn-comprar cont-compr'>
                            <Link to={`/products/`}>Continuar comprando</Link>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Cart
