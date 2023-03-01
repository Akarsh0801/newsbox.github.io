import React from 'react'


export default function Newsitem(props){


    return(
        <div className='flex flex-col mx-auto w-3/5 md:w-full lg:w-full xl:w-full 2xl:w-full shadow-md shadow-gray-600 bg-white '>
         
        <div>
            <img src={props.src} className='w-full h-48' alt=""/>
        </div>

        <div className='flex flex-col gap-y-1.5 p-3 pb-3 pt-3'>
         <div className='text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-semibold'>
            {props.title}...
         </div>

         <div className='text-md'>
            {props.description}...
         </div>

         <div className='flex  justify-between'>
         <div className='text-sm font-semibold  '>
            {props.source}
         </div>
         <div className='text-sm italic'>
            {props.time}
         </div>
         </div>
         <a href={props.url} target='_blank' rel='noreferrer'><button className='border-2 border-black p-1 text-sm'>Read more..</button></a>

         </div>
        </div>
    )
}