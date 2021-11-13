import React from 'react'
import {useProducts} from '../../hooks/useProducts'
import './styles.css'
import { Link } from 'react-router-dom'

function ShoppingCart({cartOpen, setCartOpen}) {
    const [products, setProducts] = useProducts()

    const removeProduct = (product) => {
        setProducts(prev => prev.filter(ele => ele.product.id !== product.id))
    }

    const clearProducts = () => {
        setProducts([])
    }

    return (
        <div className={`cart ${cartOpen ? 'open' : 'close'}`}>
            <div className='header-cart'>
                <h3>Tu Carrito</h3>
                <i onClick={() => setCartOpen(false)}><img src='/assets/images/close.svg' alt='close-cart' /></i>
            </div>
            <div className='list-products-cart'>
            {products.length > 0 && <button className='btn-comprar clean-products' onClick={() => clearProducts()}>Eliminar productos</button>}
                {products.map(({product, count}) => {
                    return (
                        <div className='product-cart' key={product.id} >
                            <img src={product.pictureUrl} alt={product.title} />
                            <div className='name-quantity'>
                                <p className='name-product-cart'>{product.title}</p>
                                <p className='quantity-cart'>Cant: {count}</p>
                            </div>
                            <div className='price-product-cart'>
                                <p>$ {product.price.toLocaleString('en-US')}</p>
                            </div>
                            <i className='delete-item' onClick={() => removeProduct(product)}><img src='/assets/images/minus.svg' alt='remove item' /></i>
                        </div>
                    )
                })}
            </div>
            <div className='subtotal-cart'>
                <h3>Subtotal:</h3>
                <p>$ {products.map(e => e.product.price * e.count).reduce(((x,y) => x + y), 0) }</p>
            </div>
            {products.length > 0 && <div className='btn-comprar fin-compra-cart'><Link to={'/cart'} >Finalizar Compra</Link></div>}
            
        </div>
    )
}

export default ShoppingCart
