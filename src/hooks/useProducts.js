import { useContext } from 'react'
import { AppContext } from '../context/AppContext'


export function useProducts() {
    //Obtengo la informacion del contexto 
    const { products, addProduct, removeProduct, clearProducts, getSubtotal } = useContext(AppContext)
    return { products, addProduct, removeProduct, clearProducts, getSubtotal } //Retorno la informacion
}