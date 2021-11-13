import { useContext } from 'react'
import { AppContext } from '../context/AppContext'


export function useProducts() {
    //Obtengo la informacion del contexto 
    const { products, setProducts } = useContext(AppContext)
    return [products, setProducts] //Retorno la informacion
}