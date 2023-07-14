import React from 'react'

import Header from './Header' ;
import Blogs from './Blogs' ;
import Pagination from './Pagintaion' ; 
function Home() {
 

  return (
    <div className='relative'>

    <Header />
    <div className='pt-[130px]'>
    <Blogs />
    <Pagination />
    </div>

    </div>
  )
}

export default Home