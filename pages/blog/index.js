import React from 'react'
import Post from '../../components/blog'

function PostList({posts}) {
    return(
        <>
            <h1>List of posts<hr/></h1>
            {posts.map(post => {
                return(
                    <div key={post.id}>
                        <Post post={post}/>
                    </div>
                ) 
            })}
        </>
    ) 
  
}

export default PostList;

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    console.log("All postS " ,data)
    return {
        props:{
            posts:data.slice(0,3)
        },
    }
}