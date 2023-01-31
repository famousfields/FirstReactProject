import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
    const link = 'http://localhost:8000/blogss';

    const {data: blogs, isPending,error} = useFetch(link);
    return (  
        <div className="Home">
            { error && <div> {error} </div>}
            { isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs = {blogs} title = "All Blogs!" />}
        </div>
    );
}
 
export default Home;