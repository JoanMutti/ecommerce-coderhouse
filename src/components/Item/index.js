import React from 'react'
import './styles.css'

const Item = ({product}) => {
    const {title, price, pictureUrl} = product
    return (
        <div className="card-product">
            <img src={pictureUrl} alt={title}/>
            <div className="product-info">
                <p className="product-name">{title}</p>
                <p>$ {price.toLocaleString('en-US')}</p>
            </div>
        </div>
    )
}

export default Item
