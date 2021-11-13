import React from 'react'
import CategoryNav from '../components/CategoryNav'
import ItemList from '../components/ItemList'
import data from '../data/data'
import Layout from '../components/Layout'

function Home() {

    const masVendidos = data.filter(e => (e.id % 2) === 0)

    return (
        <Layout>
            <div style={{width: '100%', maxHeight: 'calc(100vh - 60px)', overflow: 'hidden'}}><img src='/assets/images/Banner.png' alt='Banner' style={{width: '100%'}} /></div>
            <CategoryNav containerClass='big-categories-container' categoryClass='big-card-category'/>
            <h3 style={{fontSize: '35px', fontWeight: '500', margin: '50px 10px 10px 10px', textAlign: 'center', }}>Más vendidos</h3>
            <ItemList products={masVendidos}/>
        </Layout> 
    )
}

export default Home
