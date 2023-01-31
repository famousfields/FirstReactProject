import {useState, useEffect} from 'react';
import BlogList from './BlogList';


const Home = () => {
   
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    //runs every render, unless you put '[]' after function
    //fetches data data
    useEffect(() => {
        setTimeout(() =>{
            fetch('http://localhost:8000/blogs')//fetch from database (this endpoint was available to us after watching the database from a command in the terminal)
            .then(response => {//check to see if there was a proper response from the data base...
                if(!response.ok){
                    throw Error('Could not fetch data for that resource');
                }
                return response.json();
            })
            .then((data) => {
                setBlogs(data);// sets blogs to that data
                setIsPending(false);
                setError(null);
            })
            .catch(error => {// catches any kind of network error
                setError(error.message);
                if(error.message)
                {
                    setIsPending(false);
                }
            })
        }, 1000)
        
            
    }, []);

    
    return (  
        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>} 
            {blogs && <BlogList blogs = {blogs} title = "All Blogs!"/>}
        </div>
    );
}
 
export default Home;