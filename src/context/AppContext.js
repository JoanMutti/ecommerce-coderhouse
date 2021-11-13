import React from 'react'

export const AppContext = React.createContext({})

export default function AppContextProvider({children}){
    const [products, setProducts] = React.useState([])
    
    return (
        <AppContext.Provider value={{ products, setProducts }}>
            {children}
        </AppContext.Provider>
    )
}