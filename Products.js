import React from 'react'
import Product from './Product'
// import './Padma.css';

function Products() {
    return (
        <div className='product'>
            <h1>Edvora</h1>
            <h2>Products</h2>
            <div>
                <h4>Products</h4>
                <hr />
                <Product />
            </div>
            <div>
                <h4>Products</h4>
                <hr />
                <Product />
            </div>
        </div>
    )
}

export default Products
