import React, { useState, useEffect } from 'react'
import './styles.css'
import { collection, query, getDocs, where } from "firebase/firestore";
import {getFirestoreDb} from '../../lib/firebaseConfig'
import ItemDetail from '../ItemDetail'
import { useParams, useHistory } from 'react-router-dom'
import Loading from '../Loading'


const ItemDetailContainer = () => {
    const history = useHistory()
    const db = getFirestoreDb()    
    const [product, setProduct] = useState({})
    const {itemId} = useParams()

    useEffect(() => { 
        const getProductById = async () => {
          const queryCollection  = query(collection(db, 'products'), where('id', '==', `${itemId}`));
          const querySnapshot = await getDocs(queryCollection);
          let aux = {};
          querySnapshot.forEach((doc) => {
            aux = {...doc.data()}
          });
          !aux.id && history.push('/404')
          setProduct(aux);
        }
        getProductById();
    }, [itemId, db, history]);

    return (
        <div>
            {product.id ? <ItemDetail  product={product}/> : <Loading />}
        </div>
    )
}

export default ItemDetailContainer
