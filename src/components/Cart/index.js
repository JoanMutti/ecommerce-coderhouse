import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { addDoc } from 'firebase/firestore'
import {useProducts} from '../../hooks/useProducts'
import ItemCount from '../ItemCount'
import './styles.css'
import { getCollection, getFirestoreDb } from '../../lib/firebaseConfig'
import BuyerForm from '../BuyerForm'

function Cart({width}) {
    const {products, getSubtotal, addOne, removeOne, removeProduct, clearProducts} = useProducts()
    const history = useHistory()
    const [showFormBuyer, setShowFormBuyer] = useState(false)


    const handleCountClick = (e, productId) => {
        if(e.target.id === 'plus'){
            addOne(productId)
        }else if(e.target.id === 'minus' && products.find(ele => ele.product.id === productId).count > 1){
            removeOne(productId)
        }
    } 

    const buyProduct = async (buyer) => {
        try {
            const db = getFirestoreDb()
            const collection = getCollection(db, 'orders')
            await addDoc(collection, {
                buyer,
                items: products?.map(product => product),
                total: Number.parseInt(getSubtotal().replace(',',''))
            })
            clearProducts()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='cart-container-out'>
            {showFormBuyer && <BuyerForm setShowFormBuyer={setShowFormBuyer} buyProduct={buyProduct} />}
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
                                {width > 480 ? 
                                    <button className='btn-comprar delete-product' onClick={() => removeProduct(product)}>Eliminar producto</button> 
                                :
                                    <i className='delete-item cart-delete-item' onClick={() => removeProduct(product)}><img src='/assets/images/minus.svg' alt='remove item' /></i>
                                }
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
                        <button className='btn-comprar pagar' onClick={() => setShowFormBuyer(true)} >Pagar</button>
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
