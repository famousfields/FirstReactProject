import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    //runs every render, unless you put '[]' after function call
    //fetches data data
    useEffect(() => {
        setTimeout(() =>{
            fetch(url)//fetch from database (this endpoint was available to us after watching the database from a command in the terminal)
            .then(response => {//check to see if there was a proper response from the data base...
                if(!response.ok) {
                    throw Error('Could not fetch data for that end point');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);// sets blogs to that data
                setIsPending(false);
                setError(null);
            })
            .catch(error => {// catches any kind of network error
                setIsPending(false);
                setError(error.message);
            })
        }, 1000)
        
    }, [url]);

    return{data,isPending,error}
}

export default useFetch;