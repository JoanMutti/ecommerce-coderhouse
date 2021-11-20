import React, {useState} from 'react'
import './styles.css'
import ItemCount from '../ItemCount'
import {useProducts} from '../../hooks/useProducts'
import { Link } from 'react-router-dom'

function ItemDetail({product}) {
    const {id, pictureUrl, title, description, price} = product
    const {addProduct, products} = useProducts()
    const [count, setCount] = useState(1)

    const handleCountClick = (e) => {
        if(e.target.id === 'plus'){
            setCount(count+1)
        }else if(e.target.id === 'minus' && count > 1){
            setCount(count-1)
        }
    } 


    return (
        <div className="item-card-detail">
            <img src={pictureUrl} alt={title}/>
            <div className="info-product-detail">
                <p className="name-product-detail">{title}</p>
                <p className='price-product-detail'>$ {price.toLocaleString('en-US')}</p>
                <div className="price-quantity">
                    {!products.some(e => e.product.id === id) ?
                    <button className='btn-comprar' 
                        onClick={(e) => {
                            e.preventDefault()
                            addProduct({product, count})
                        }}>
                            Agregar al Carrito
                    </button>
                    :
                    <div className='btn-comprar go-cart'>
                        <Link to={`/cart/`}>Ver el carrito</Link>
                    </div>
                    }
                    {!products.some(e => e.product.id === id) && <ItemCount count={count} onClickCount={handleCountClick} />}
                </div>
                <h3>Descripción</h3>
                <p className="description-product-detail">{description}</p>
            </div>
        </div>
    )
}

export default ItemDetail
