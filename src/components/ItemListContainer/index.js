import React, { useState, useEffect } from 'react'
import './styles.css'
import ItemList from '../ItemList'

const data = [
    {id: 1, title: 'Remera Negra', price: 2000, pictureUrl: 'https://static.dafiti.com.ar/p/topper-6748-750805-1-catalog-new.jpg'},
    {id: 2, title: 'Remera Amarilla', price: 3000, pictureUrl: 'https://static.dafiti.com.ar/p/topper-6901-992848-1-catalog-new.jpg'},
    {id: 3, title: 'Pantalon Azul', price: 4000, pictureUrl: 'https://static.dafiti.com.ar/p/wemuel-0528-112245-1-catalog-new.jpg'},
    {id: 4, title: 'Pantalon Gris', price: 980, pictureUrl: 'https://static.dafiti.com.ar/p/wemuel-9569-862425-1-catalog-new.jpg'},
    {id: 5, title: 'Camisa Plumas', price: 760, pictureUrl: 'https://static.dafiti.com.ar/p/oneill1-3501-365135-1-catalog-new.jpg'},
    {id: 6, title: 'Camisa Flores', price: 1500, pictureUrl: 'https://static.dafiti.com.ar/p/oneill1-4727-425735-1-catalog-new.jpg'},
    {id: 7, title: 'Medias Blancas', price: 1300, pictureUrl: 'https://static.dafiti.com.ar/p/salomon-3865-708656-1-catalog-new.jpg'},
    {id: 8, title: 'Medias B/G/N', price: 2000, pictureUrl: 'https://static.dafiti.com.ar/p/topper-2853-973107-1-catalog-new.jpg'},
    {id: 9, title: 'Zapatillas Negras', price: 5400, pictureUrl: 'https://static.dafiti.com.ar/p/noba-6438-197392-1-catalog-new.jpg'},
    {id: 10, title: 'Zapatillas Marrones', price: 6600, pictureUrl: 'https://static.dafiti.com.ar/p/briganti-8398-351818-1-catalog-new.jpg'},
]

const ItemListContainer = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        setTimeout(() => {
            setProducts(data)
        }, 2000)
    }, [])

    return (
        <div className='container'>
            <h3 className='title'>Productos</h3>
            {products.length > 0 ? <ItemList products={products}/> : <h4>Cargando....</h4>}
        </div>
    )
}

export default ItemListContainer
