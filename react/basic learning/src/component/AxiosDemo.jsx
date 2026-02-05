
// import { useState, useEffect } from "react";
// import axios from "axios";
// function AxiosDemo() {

//     const [posts, setPosts] = useState([]);
// const [title, setTitle] = useState("");
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState("");

// useEffect(() => {
//   setLoading(true);

//   axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
//     .then(res => {
//       setPosts(res.data);
//       setLoading(false);
//     })
//     .catch(() => {
//       setError("Failed to load");
//       setLoading(false);
//     });
// }, []);

// const addPost = () => {
//   axios.post("https://jsonplaceholder.typicode.com/posts", {
//     title: title,
//     body: "content"
//   }).then(res => {
//     setPosts([res.data, ...posts]);
//     setTitle("");
//   });
// };


// const deletePost = (id) => {
//   axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   setPosts(posts.filter(p => p.id !== id));
// };

// return (
//   <div>
//     <h2>Axios Example</h2>

//     <input
//       value={title}
//       onChange={e => setTitle(e.target.value)}
//       placeholder="Enter title"
//     />

//     <button onClick={addPost}>Add</button>

//     {loading && <p>Loading...</p>}
//     {error && <p>{error}</p>}

//     {posts.map(post => (
//       <div key={post.id}>
//         {post.title}
//         <button onClick={() => deletePost(post.id)}>Delete</button>
//       </div>
//     ))}
//   </div>
// );
//     }
// export default AxiosDemo;

import {useState,useEffect} from "react";
import axios from "axios";

function AxiosDemo() {
    const [posts,setPosts]=useState([]);
    const [title,setTitle]=useState("");
    const [loading,setLoading]=useState(false);
    const[error,setError]=useState("");

    useEffect(()=>{
        setLoading(true);

        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(res=>{
            setPosts(res.data);
            setLoading(false);
        })
        .catch(()=>{
            setError("Failed to load");
            setLoading(false);
        });
    },[]);

    
}