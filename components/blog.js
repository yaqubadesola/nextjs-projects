import React from 'react'
import Link from 'next/link'

function Post({ post }) {
  return (
    <div>
    <Link href={`blog/${post.id}`} passHref>
        <a>
            <h2>{post.title}</h2>
        </a>
    </Link>
        
        <p style={{color:"blue", fontSize:"1rem"}}>{post.body}</p>
        <hr/>
      
    </div>
  )
}

export default Post