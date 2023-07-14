import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'
import Post from './Post'
import Spinner from './Spinner';

function Blogs() {

const {loading , posts  } = useContext(AppContext)

console.log('printing posts '  , posts) ; 

  return (
    <div className=' pb-[200px] px-20 w-[60%] mx-auto'>
   { loading ?(<div className=''> <Spinner /> </div>): 
   (<div >
    {posts.length===0 ? (<div>No Post Found</div>) : 
      ( <div className='flex flex-col justify-center   gap-20'> {posts.map(post => <Post key={post.id} post={post}></Post>)}
   </div>)
   }
   </div>
  )
}
</div>
  )
}

export default Blogs