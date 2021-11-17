import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    const {title, price, pictureUrl, id} = product
    return (
        <Link to={`../item/${id}`}>
            <div className="card-product">
                <img src={pictureUrl} alt={title}/>
                <div className="product-info">
                    <p className="product-name">{title}</p>
                    <p>$ {price?.toLocaleString('en-US')}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item
