import React from 'react'
import './styles.css'

function ItemDetail({product}) {
    const {pictureUrl, title, description, price} = product
    console.log(product)
    return (
        <div className="item-card-detail">
            <img src={pictureUrl} alt={title}/>
            <div className="info-product-detail">
                <p className="name-product-detail">{title}</p>
                <p className='price-product-detail'>$ {price.toLocaleString('en-US')}</p>
                <button className='btn-comprar'>Comprar</button>
                <h3>Descripción</h3>
                <p className="description-product-detail">{description}</p>
            </div>
        </div>
    )
}

export default ItemDetail
