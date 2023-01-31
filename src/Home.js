import {useState, useEffect} from 'react';
import BlogList from './BlogList';


const Home = () => {
   
    const [blogs, setBlogs] = useState(null);
    //const [isPending, setIsPending] = useState(true);

    //runs every render, unless you put '[]' after function
    //fetches data data
    useEffect(() => 
    {
        fetch('http://localhost:8000/blogs')
            .then(response => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
            })
    }, []);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    
    return (  
        <div className="Home">
            {/* {isPending && <div>Loading...</div>} */}
          {/* {blogs && <BlogList blogs = {blogs} title = "All Blogs!" handleDelete = {handleDelete}/>} */}
        </div>
    );
}
 
export default Home;