import BlogList from '../BlogList';
import useFetch from '../useFetch';

const Home = () => {
    const link = 'http://localhost:8000/blogs';
    const {data: blogs, isPending,error} = useFetch(link);// sets variables to whatever the fetch function returns

    return (  
        <div className="Home">
            { error && <div> {error} </div>}
            { isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs = {blogs} title = "All Blogs!" />}
        </div>
    );
}
 
export default Home;