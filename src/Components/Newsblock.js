import React,{useState,useEffect}  from 'react'
import Newsitem from './Newsitem'

export default function Newsblock(){
   
const[articles,setArticles]=useState([])
 

useEffect(() => {
    getData()
    }, []);

 
 const getData=()=>{
    fetch("https://newsapi.org/v2/everything?q=in&apiKey=d24493795b36427cb775c697c5643ce3&page=1&pageSize=20")
    .then(res=>res.json())
    .then(res=>console.log(setArticles(res.articles)));
}  

 const goBack=async()=>{
    console.log("Previous")
    fetch(`https://newsapi.org/v2/everything?q=in&apiKey=d24493795b36427cb775c697c5643ce3&page1&pageSize=20`)
    .then(res=>res.json())
    .then(res=>console.log(setArticles(res.articles)))
}
 const handleNext= async()=>{
    console.log("Next")
    let page=1;
    fetch(`https://newsapi.org/v2/everything?q=in&apiKey=d24493795b36427cb775c697c5643ce3&page=${page+1}&pageSize=20`)
    .then(res=>res.json())
    .then(res=>setArticles(res.articles))
     page=page+1;
     console.log(page);
}


    return(
        <>
        <div className=' grid grid-cols-1 mx-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-x-8 gap-y-10  m-2 pb-4 p-6 2xl:pl-48 2xl:pr-48'>
            
            {
                 articles.map((articles)=>{
                    return(
                        <>
                       
                        <Newsitem  key={articles.url} title={articles.title.slice(0,29)} description={articles.description.slice(0,99)} src={articles.urlToImage} source={articles.author} time={articles.publishedAt.slice(0,10)} url={articles.url}/>
                        
                        </> 
                    )
                    })
            
            }
        </div>
        <div className='flex justify-between mx-auto w-full b-4 p-6 pt-2 pb-2  2xl:pl-48 2xl:pr-48 ' >
            <button  className='border-2 w-28 border-black p-2 hover:bg-black hover:text-white' onClick={goBack}>Go back</button>
            <button className='border-2 w-28 border-black p-2 hover:bg-black hover:text-white' onClick={handleNext}>Next</button>
        </div>
        </>
    )
}