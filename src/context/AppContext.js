import { createContext, useState } from "react";
import { baseUrl} from "../baseUrl";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();


 function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate() ;


    //data filling 
    async function fetchBlogPosts(page = 1 ,tag=null , category) {
        setLoading(true);
        let url = `${baseUrl}get-blogs?page=${page}`
        if(tag){
          url += `&tag=${tag}`  
        }
        if(category){
            url += `&tag=${category}`  
          }
        try {
            await axios.get(url).then(response => { setPage(response.data.page); setPosts(response.data.posts); setTotalPages(response.data.totalPages); console.log(response.data) })
        }
        catch (e) {
            alert('error in fetching data');
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    const handlePageChange = (page)=>{
        navigate({search : `?page=${page}`})
        setPage(page) ;
        
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages ,
        fetchBlogPosts ,
        handlePageChange 
    }


    return (<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>)
}


export default AppContextProvider ;