import React from 'react'
import NewItem from '../../components/new'

function New({items, category}) {
  return (
    <>
    <h1> {`List of ${category}'s news`}<hr/></h1>

    {items?.map(item => {
        return(
            <div key={item.id}>
                <NewItem item={item}/>
            </div>
        ) 
    })}
</>
  )
}

export default New


// export async function getStaticPaths(){
//     //
//     const response = await fetch(`http://localhost:4000/news`)
//     const data  = await response.json()
//     const pathsArr = data.map(item => {
//         return {
//             params : {blogId: item.id.toString()}
//         }
//     })
    
//     return {
//         paths: pathsArr,
//         fallback:false,  
//     }
// }

export async function getServerSideProps(context){
    const { params } = context
    const {category} = params
    
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data  = await response.json()
    console.log("data ",data)
    return {
        props:{
            items: data,
            category,
        }
    }
}