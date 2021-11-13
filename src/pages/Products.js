import React from 'react'
import CategoryNav from '../components/CategoryNav'
import ItemListContainer from '../components/ItemListContainer'
import Layout from '../components/Layout'

function Products() {


    return (
        <Layout>
            <CategoryNav/>
            <ItemListContainer />
        </Layout>
    )
}

export default Products
