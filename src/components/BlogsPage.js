import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { baseUrl } from '../baseUrl';
import Header from './Header'
import Post from './Post';
import Spinner from './Spinner';

function BlogsPage() {




  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const blogId = location.pathname.split('/').at(-1);

  useEffect(() => {
    if (blogId) { fetchRelatedBlogs(); }
  }, [location.pathname])

  const { setLoading, loading } = useContext(AppContext);
  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${baseUrl}get-blog?blogId=${blogId}`;
    await axios.get(url)
                .then(response => {  
                                    setBlog(response.data.blog); 
                                    console.log(blog) ;
                                    setRelatedBlogs(response.data.relatedBlogs) ;  })
                .catch(e => { console.log(e); setBlog(null); setRelatedBlogs([]) ; })
    setLoading(false);
  }
  return (
    <div className='pb-[100px]'>
      <Header />
      <div  className='mt-20 w-[50%] mx-auto flex flex-col gap-5 px-3' >
        <button className='border border-bodycolor py-2 px-4 rounded-lg w-[fit-content]' onClick={() => { navigate(-1) }}>Back</button>
        {loading ? (<Spinner />) : blog ? (<div>
        <Post post={blog}></Post>
        <h2 className='text-[2rem] my-10 font-extrabold '>Related Blogs</h2>
        <div className='flex flex-col gap-20 mt-10'>
        {
          relatedBlogs?.map(post => <Post key={post.id} post={post}></Post>)
          }
          </div>
      </div>) : (<p>No Post Found</p>)



      }
      </div>
     
     


    </div>
  )
}

export default BlogsPage; 