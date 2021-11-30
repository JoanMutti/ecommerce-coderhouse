import React from 'react'
import Layout from '../components/Layout'
import Cart from '../components/Cart'
import {useWindowSize} from '../hooks/useWindowSize'

function CartPage() {
    const width = useWindowSize()

    return (
        <Layout>
            <Cart width={width} />
        </Layout>
    )
}

export default CartPage
