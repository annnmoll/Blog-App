import React from 'react'
import Header from './Header';
import { useLocation, useNavigate } from 'react-router-dom';
import Pagintaion from './Pagintaion';
import Blogs from './Blogs'

function TagPage() {

  const navigate = useNavigate() ;
  const location = useLocation() ;
  const tag = location.pathname.split('/').at(-1)
  return (
    <div>
    <Header />

    <div className=' pt-[100px] px-20 mb-10 w-[60%] mx-auto'>

      
      <button className='border border-bodycolor py-2 px-4 rounded-lg w-[fit-content]' onClick={()=> navigate(-1)}>Back</button>
      <h2 className='text-[2rem] my-10 font-extrabold ' >Blogs Tagged <span>#{tag}</span></h2>

    </div>

    <Blogs/>
    <Pagintaion />

    </div>
  )
}

export default TagPage ; 