import React from 'react'
import Header from './Header';
import Pagintaion from './Pagintaion';
import Blogs from './Blogs';
import { useLocation, useNavigate } from 'react-router-dom';

function CategoryPage() {
  const navigate = useNavigate() ;
  const location = useLocation() ;
  const category = location.pathname.split('/').at(-1) ; 
  return (
    <div>
    <Header />

    <div className='mt-20 w-[50%] mx-auto flex flex-col gap-5 px-3' >
      <button className='border border-bodycolor py-2 px-4 rounded-lg w-[fit-content]' onClick={()=> navigate(-1)}>Back</button>
      <h2>Blogs on <span>{category}</span></h2>
    </div>

    <Blogs />
    <Pagintaion />

    </div>
  )
}

export default CategoryPage ; 