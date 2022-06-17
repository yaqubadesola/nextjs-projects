import React from 'react'
import Link from 'next/link'

function NewItem({ item }) {
  return (
    <div>
    <Link href={`news/${item.category}`} passHref>
        <a>
            <h2>{item.title}</h2>
        </a>
    </Link>
        
        <p style={{color:"blue", fontSize:"1rem"}}>{item.body}</p>
        <hr/>
      
    </div>
  )
}

export default NewItem