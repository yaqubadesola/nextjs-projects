import React from 'react'
import NewItem from '../../components/new'

function NewsList({news}) {
    return(
        <>
            <h1>List of news<hr/></h1>
            {news.map(item => {
                return(
                    <div key={item.id}>
                        <NewItem item={item}/>
                    </div>
                ) 
            })}
        </>
    ) 
  
}

export default NewsList;

export async function getServerSideProps(){
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json();
    return {
        props:{
            news:data
        },
    }
}