import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const productCategories = [
    {
       category: 'pantalones',
       id: 'uc1zEsKSrz' 
    },
    {
       category: 'remeras',
       id: 'iDiCPQtxU4' 
    },
    {
        category: 'zapatillas',
        id: 'qvwpW46tC5' 
     },
    {
       category: 'camisas',
       id: 'AxbLrKW24U' 
    },
]

function CategoryNav({containerClass, categoryClass}) {
    return (
        <div className={containerClass ? containerClass : 'product-categories'}>
            {productCategories.map(item => {
                return (
                    <Link className={categoryClass ? categoryClass : 'product-category'} to={`/products/${item.category}`} key={item.id}><p>{item.category}</p></Link>              
                )
            })}
        </div>
    )
}

export default CategoryNav
