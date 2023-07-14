
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import Home from './components/Home';
import BlogsPage from './components/BlogsPage';
import { Routes, Route, useSearchParams, useLocation } from 'react-router-dom';
import CategoryPage from './components/CategoryPage';
import TagPage from './components/TagPage';


function App() {

  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();


  useEffect(() => {
    const page = searchParams.get('page') ||  1;
    if (location.pathname.includes('tags')){
      const tag = location.pathname.split('/').at(-1).replaceAll('-', ' ');
      fetchBlogPosts(Number(page), tag)
    }
    else if (location.pathname.includes('category')) {
      const category = location.pathname.split('/').at(-1).replaceAll('-', ' ');
      fetchBlogPosts(Number(page), null, category) ; 
    }
    else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search])

  

  return (


    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/blog/:blogId' element={<BlogsPage />} />
      <Route path='/tags/:tag' element={<TagPage />} />
      <Route path='/categories/:category' element={<CategoryPage />} />

    </Routes>


  );
}

export default App;
