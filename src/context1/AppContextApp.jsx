import { useState } from "react";
import { createContext } from "react";
import { baseUrl } from '../baseUrl.js';
//console.log(baseUrl);


export const AppContext = createContext(); //create context-app

//create provider
export default function AppContextProvide({children}){
      const[loading,setLoading]  = useState(false);
      const[posts,setposts] = useState([]);
      const[page,setPage] = useState(1);
      const[totalpages,setTotalpages] = useState(null);

      async function fatchBlog(page = 1){
        setLoading(true);
        const  url = `${baseUrl}?page=${page}`;
        console.log(url);
        try{
             const res = await fetch(url);
             const data = await res.json();
             console.log(data);
             setPage(data.page);
             setposts(data.posts);
             setTotalpages(data.totalPages);
        }
        catch{
          console.log("Error in fetching data");
          setPage(1);
          setposts([]);
          setTotalpages(null);
        }
        setLoading(false);
      }
   
      function handlerPageChange(page){
        setPage(page);
        fatchBlog(page);
      }



      const value = {
             loading,
             setLoading,
             posts,
             setposts,
             page,
             setPage,
             totalpages,
             setTotalpages,
             fatchBlog,
             handlerPageChange
      };

      return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}