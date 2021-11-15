import React from 'react'

export const AppContext = React.createContext({})

export default function AppContextProvider({children}){
    const [products, setProducts] = React.useState([])
    
    const addProduct = (product) => {
        const isInCart = (element) => element.product.id === product.product.id
        !products.some(isInCart) && setProducts((prev) => [...prev, product])
    }

    const removeProduct = (product) => {
        setProducts(prev => prev.filter(ele => ele.product.id !== product.id))
    }

    const clearProducts = () => {
        setProducts([])
    }

    const getSubtotal = () => {
        return products.map(e => e.product.price * e.count).reduce(((x,y) => x + y), 0).toLocaleString('en-US')
    }

    return (
        <AppContext.Provider value={{ products, addProduct, removeProduct, clearProducts, getSubtotal }}>
            {children}
        </AppContext.Provider>
    )
}