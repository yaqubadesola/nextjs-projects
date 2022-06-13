import React from 'react'
import {useRouter} from 'next/router'
function Product({product}) {
    const router = useRouter()
    if(router.isFallback){
        return <div>Loading...</div>
    }
  return (
    <div>
        <h2>Product Detail</h2>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
    </div>
  )
}

export default Product


export async function getStaticPaths(){
    //
    // const response = await fetch(`http://localhost:4000/products`)
    // const data  = await response.json()
    // const pathsArr = data.map(item => {
    //     return {
    //         params : {blogId: item.id.toString()}
    //     }
    // })
    
    return {
        // paths: pathsArr,
        paths: [{params : {productId : "1"}}],
        fallback:true,  
    }
}

export async function getStaticProps(context){
    const { params } = context
    console.log("params ", params)
    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data  = await response.json()

    return {
        props:{
            product: data
        }
    }
}