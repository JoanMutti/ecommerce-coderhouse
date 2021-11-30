import React from 'react'
import CategoryNav from '../components/CategoryNav'
import ItemListContainer from '../components/ItemListContainer'
import Layout from '../components/Layout'

function Home() {

    return (
        <Layout>
            <div style={{width: '100%', maxHeight: 'calc(100vh - 60px)', overflow: 'hidden'}}><img src='/assets/images/Banner.png' alt='Banner' style={{width: '100%'}} /></div>
            <CategoryNav containerClass='big-categories-container' categoryClass='big-card-category'/>
            <h3 style={{fontSize: '35px', fontWeight: '500', margin: '50px 10px 10px 10px', textAlign: 'center', }}>Más vendidos</h3>
            <ItemListContainer />
        </Layout> 
    )
}

export default Home
