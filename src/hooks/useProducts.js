import { useContext } from 'react'
import { AppContext } from '../context/AppContext'


export function useProducts() {
    //Obtengo la informacion del contexto 
    const { products, addProduct, removeProduct, clearProducts, getSubtotal, removeOne, addOne, getCantItems } = useContext(AppContext)
    return { products, addProduct, removeProduct, clearProducts, getSubtotal, removeOne, addOne, getCantItems } //Retorno la informacion
}