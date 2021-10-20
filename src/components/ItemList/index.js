import React from 'react'
import Item from '../Item/'
import './styles.css'

const ItemList = ({products}) => {
    return (
        <div className='list-items'>
            {products.map((prod) => <Item product={prod} key={prod.id}/>)}
        </div>
    )
}

export default ItemList
