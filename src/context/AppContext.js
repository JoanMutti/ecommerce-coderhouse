import React, {useEffect} from 'react'

export const AppContext = React.createContext({})

export default function AppContextProvider({children}){
    const [products, setProducts] = React.useState([])

    useEffect(() => {
        localStorage.getItem('cart') && setProducts(JSON.parse(localStorage.getItem('cart')))
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(products))
        products.length === 0 && localStorage.removeItem('cart')
    }, [products])

    const addOne = (productId) => {
        const aux = products.map( ele => ele.product.id === productId ? {product: ele.product, count: ele.count+1} : ele)
        setProducts(aux)
    }

    const removeOne = (productId) => {
        const aux = products.map( ele => ele.product.id === productId ? {product: ele.product, count: ele.count-1} : ele)
        setProducts(aux)
    }

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

    const getCantItems = () => {
        return products.map(e => e.count).reduce(((x,y) => x + y), 0)
    }

    return (
        <AppContext.Provider value={{ products, addProduct, removeProduct, clearProducts, getSubtotal, removeOne, addOne, getCantItems }}>
            {children}
        </AppContext.Provider>
    )
}