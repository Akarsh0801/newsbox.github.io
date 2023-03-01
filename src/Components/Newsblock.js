import React,{useState,useEffect}  from 'react'
import Newsitem from './Newsitem'





export default function Newsblock(){
   
const[articles,setArticles]=useState([])

useEffect(() => {
    getData()
    }, []);

const getData=()=>{
    fetch("https://newsapi.org/v2/top-headlines?q=in&apiKey=a9cfac00035f44baaf5b593c8e767402").then(res=>res.json()).then(res=>console.log(setArticles(res.articles)));
    
}  

    return(
        <>
        <div className=' grid grid-cols-1 mx-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-x-8 gap-y-10  m-2 pb-4 p-6 2xl:pl-48 2xl:pr-48'>
            
            {
                 articles.map((articles)=>{
                    return(
                        <>
                       
                        <Newsitem  key={articles.url} title={articles.title.slice(0,29)} description={articles.description.slice(0,95)} src={articles.urlToImage} source={articles.author} time={articles.publishedAt.slice(0,10)}/>
                        
                        </> 
                    )
                    })
            
            }
        
       
        </div>
        </>
    )
}