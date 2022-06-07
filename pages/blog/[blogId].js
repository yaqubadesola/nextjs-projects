import React from 'react'

function Post({post}) {
  return (
    <div>
        <h2>Post Detail</h2>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
  )
}

export default Post


export async function getStaticPaths(){
    return {
        paths: [
            {
                params: {blogId : '1'}
            },
            {
                params: {blogId : '2'}
            },
            {
                params: {blogId : '3'}
            }
        ],
        fallback:false,  
    }
}

export async function getStaticProps(context){
    console.log("context ",context)
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`)
    const data  = await response.json()

    return {
        props:{
            post: data
        }
    }
}