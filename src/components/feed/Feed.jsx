import { useState,useEffect } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";


export default function Feed({username}) {
    const [posts, setPosts] = useState([]);


    useEffect(() =>{
       const fetchPosts = async () => {
           try{
               const posts = username 
               ? await axios.get("/posts/profile/"+username) 
               : await axios.get("/posts/timeline/615c852f9e53a5f28e131cc9");
                setPosts(posts.data);
           } catch(error) {
               console.log(error);
           }
       }
       fetchPosts();
    },[username]);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map(p => (

                <Post key={p._id} post={p} />
                ))}
               
            </div>
        </div>
    );
}





