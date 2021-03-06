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
    //
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data  = await response.json()
    const pathsArr = data.map(item => {
        return {
            params : {blogId: item.id.toString()}
        }
    })
    
    return {
        paths: pathsArr,
        fallback:false,  
    }
}

export async function getStaticProps(context){
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`)
    const data  = await response.json()

    return {
        props:{
            post: data
        }
    }
}