import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
   
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    //runs every render, unless you put '[]' after function
    //fetches data data
    useEffect(() => {
        setTimeout(() =>{
            fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })  
        .then(data => {
            setBlogs(data);
            setIsPending(false);
            })
            .catch(err => {
                console.log(err.message);
            })
        },1000);
        
    }, []);

    const handleDelete =  (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    
    return (  
        <div className="Home">
            {isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs = {blogs} title = "All Blogs!" handleDelete = {handleDelete}/>}
        </div>
    );
}
 
export default Home;