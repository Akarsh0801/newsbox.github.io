import React from 'react'



export default function Navbar(){
    // const category=["All","General","Sports","Technology","Health","Science"];


    return(
            <div className='nav flex justify-between items-center bg-black text-white h-fit w-full p-3 pl-16 pr-16'>
              <h1 className='text-2xl font-semibold'>NewsBox</h1>     
              <div>
              {/* <select className='border-2 border-white bg-black ' name="category" id="category">
                 <option value="All">All</option>
                <option value="general">General</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                
                category.map((cate)=>{
                    return <option key={cate.toString()}>{cate}</option>;
                })
              </select> */}
              </div>
            </div>
    )
}