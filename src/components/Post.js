import React from 'react'
import {NavLink} from 'react-router-dom'

function Post({post}) {
  return (
    <div className='flex flex-col justify-center  text-left gap-2 '>
        <NavLink to={`/blog/${post.id}`} className='text-[1.75rem] font-bold cursor-pointer hover:underline'>{post.title}</NavLink>
        <p>
            By <span className='italic font-bold'>{post.author}</span> on <NavLink to={`/categories/${post?.category?.replaceAll(' ' , '-')}`} className='underline font-bold'>{post.category}</NavLink>
        </p>
        <p>Posted on <span className='italic'>{post.date}</span></p>
        <p>{post.content}</p>
        <div className='flex flex-row flex-wrap gap-5'>
            {post?.tags?.map(( tag, i)=><NavLink to={`/tags/${tag?.replaceAll(' ' , '-')}`} key={i} className='text-linkcolor underline cursor-pointer'>#{tag}</NavLink>)}
        </div>
      
    </div>
  )
}

export default Post