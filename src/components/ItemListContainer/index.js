import React, { useState, useEffect } from 'react'
import './styles.css'
import ItemList from '../ItemList'
import data from '../../data/data'
import {useParams} from 'react-router-dom'
import Loading from '../Loading'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 2000)
        })

        getItems.then(res => {
            categoryId ? setProducts(res.filter(product => product.category === categoryId)) : 
            setProducts(res)
        })
    }, [categoryId])

    return (
        <div className='container'>
            {products.length > 0 ? <ItemList products={products}/> : <Loading />}
        </div>
    )
}

export default ItemListContainer
