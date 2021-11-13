import React from 'react'
import NavBar from '../NavBar'
import ShoppingCart from '../ShoppingCart'
import { useWindowSize } from '../../hooks/useWindowSize'

function Layout({children}) {
    const [cartOpen, setCartOpen] = React.useState(false)
    const width = useWindowSize()


    return (
        <main>
            <NavBar setCartOpen={setCartOpen} width={width}/>
            <section>
                {children}
            </section>
            <ShoppingCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
        </main>
    )
}

export default Layout
