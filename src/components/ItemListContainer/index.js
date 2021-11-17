import React, { useState, useEffect } from 'react'
import './styles.css'
import ItemList from '../ItemList'
import { collection, query, getDocs } from "firebase/firestore";
import {getFirestoreDb} from '../../lib/firebaseConfig'
import {useParams} from 'react-router-dom'
import Loading from '../Loading'

const ItemListContainer = () => {
    const db = getFirestoreDb()
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        const getProductsFirestore = async () => {
            const queryCollection = query(collection(db, 'products'))
            const querySnapshot = await getDocs(queryCollection)
            const aux = []
            querySnapshot.forEach(doc => {
                console.log(doc.data())
                aux.push(doc.data())
            })
            return aux
        }
        getProductsFirestore().then(productsDb => {
            console.log(productsDb)
            categoryId ? setProducts(productsDb.filter(product => productsDb.category === categoryId)) : 
            setProducts(productsDb)
        })
    }, [categoryId, db])

    return (
        <div className='container'>
            {products.length > 0 ? <ItemList products={products}/> : <Loading />}
        </div>
    )
}

export default ItemListContainer
