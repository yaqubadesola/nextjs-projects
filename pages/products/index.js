import React from 'react'
import Product from '../../components/product'

function ProductList({products}) {
    return(
        <>
            <h1>List of products<hr/></h1>
            {products.map(product => {
                return(
                    <div key={product.id}>
                        <Product product={product}/>
                    </div>
                ) 
            })}
        </>
    ) 
  
}

export default ProductList;

export async function getStaticProps(){
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json();
    return {
        props:{
            products:data
        },
        revalidate:10
    }
}