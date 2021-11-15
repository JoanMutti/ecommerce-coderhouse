import React, { useState, useEffect } from 'react'
import './styles.css'
import data from '../../data/data'
import ItemDetail from '../ItemDetail'
import { useParams } from 'react-router-dom'
import Loading from '../Loading'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {itemId} = useParams()    

    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 2000)
        })

        getItems.then(res => {
            setProduct(res.find(i => i.id === itemId))
        })
    }, [itemId])

    return (
        <div>
            {product.id ? <ItemDetail  product={product}/> : <Loading />}
        </div>
    )
}

export default ItemDetailContainer
