import React from 'react'
import './styles.css'

function ItemCount({count, onClickCount}) {

    return (
        <div className="quantity">
            <i><img src='/assets/images/minus.svg' alt='minus' onClick={(e) => onClickCount(e)} id='minus' /></i>
            <p>{count}</p>
            <i><img src='/assets/images/plus.svg' alt='plus' onClick={(e) => onClickCount(e)} id='plus' /></i>
        </div>
    )
}

export default ItemCount
