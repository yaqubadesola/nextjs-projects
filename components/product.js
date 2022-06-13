import React from 'react'
import Link from 'next/link'

function Product({ product }) {
  return (
    <div>
    <Link href={`products/${product.id}`} passHref>
        <a>
            <h2>{product.title}</h2>
        </a>
    </Link>
        
        <p style={{color:"blue", fontSize:"1rem"}}>{product.description}</p>
        <hr/>
      
    </div>
  )
}

export default Product