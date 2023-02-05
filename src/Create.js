import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('William');
  const [ isPending, setIsPending] = useState(false);
  const history = useHistory();//represents history(back and forward arrows)

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',// tells server that we are sending an object
      headers: { "Content-Type": "application/json" },// tells server what type of data is being sent
      body: JSON.stringify(blog)// turns object into a json string
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
     // history.go(-1); goes back one page
     history.push('/');// takes us back to home page usin its route
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="William">William</option>
          <option value="Derrick">Derrick</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding blog...</button>}
      </form>
    </div>
  );
}
 
export default Create;