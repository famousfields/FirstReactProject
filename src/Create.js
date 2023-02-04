import { useState } from "react";

const Create = () => {
    
    const [title, setTitle] = useState('');
    const[body, setBody] =useState('');
    const[author,setAuthor] = useState('William');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,body,author};
        console.out(blog);
    }
    
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input 
                    type = "text" 
                    required
                />
                <label>Blog body:</label>
                <textarea 
                    required
                />
                <label>Blog author:</label>
                <select>
                    <option value = "William">William</option>
                    <option value = "Derrick">Derrick</option>
                </select>
                <button>Add blog</button>
            </form>
        </div>
     );
}
 
export default Create;