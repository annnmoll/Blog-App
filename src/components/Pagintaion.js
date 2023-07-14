import React, { useContext } from 'react'

import { AppContext } from '../context/AppContext'

function Pagintaion() {
  const {page , handlePageChange , totalPages } = useContext(AppContext);
  return (
    <div className='bg-bodybackground text-bodycolor fixed bottom-0 py-4  w-full shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] flex justify-between px-20'>
    <div className='flex gap-20'>
      { page > 1 &&
        <button  className='border border-bodycolor py-2 px-4 rounded-lg' onClick={()=>handlePageChange(page-1)}
        
        >Previous</button>
      }
      { page < totalPages && 
        <button  className='border border-bodycolor py-2 px-4 rounded-lg' onClick={()=> handlePageChange(page+1)}>Next</button>
      }
      </div>

      <div>
        <p>Page <span>{page}</span> of  <span>{totalPages}</span></p>
      </div>
    </div>
  )
}

export default Pagintaion ;

