import React, { useState, useEffect } from 'react'
import './styles.css'
import data from '../../data/data'
import ItemDetail from '../ItemDetail'
import { useParams } from 'react-router-dom'
import { useProducts } from '../../hooks/useProducts'
import Loading from '../Loading'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {itemId} = useParams() 
    const [products, setProducts] = useProducts([])

    const addProduct = (product) => {
        const isInCart = (element) => element.product.id === product.product.id
        !products.some(isInCart) && setProducts((prev) => [...prev, product])
    }


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
            {product.id ? <ItemDetail  product={product} onClickAddToCart={addProduct} /> : <Loading />}
        </div>
    )
}

export default ItemDetailContainer
