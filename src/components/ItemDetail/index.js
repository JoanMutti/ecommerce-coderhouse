import React, {useState} from 'react'
import './styles.css'
import ItemCount from '../ItemCount'

function ItemDetail({product, onClickAddToCart}) {
    const {pictureUrl, title, description, price} = product

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
                    <button className='btn-comprar' 
                        onClick={(e) => {
                            e.preventDefault()
                            onClickAddToCart({product, count})
                        }}>
                            Agregar al Carrito
                    </button>
                    <ItemCount count={count} onClickCount={handleCountClick} />
                </div>
                <h3>Descripción</h3>
                <p className="description-product-detail">{description}</p>
            </div>
        </div>
    )
}

export default ItemDetail
