import React from 'react'
import './styles.css'

function ItemCount({count, onClickCount, product}) {

    return (
        <div className="quantity">
            <i><img src='/assets/images/minus.svg' alt='minus' onClick={(e) => onClickCount(e, product)} id='minus' /></i>
            <p>{count}</p>
            <i><img src='/assets/images/plus.svg' alt='plus' onClick={(e) => onClickCount(e, product)} id='plus' /></i>
        </div>
    )
}

export default ItemCount
