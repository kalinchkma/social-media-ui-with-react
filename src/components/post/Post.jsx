import {FaEllipsisV} from "react-icons/fa";
import "./post.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {format} from "timeago.js";
import { Link } from "react-router-dom";


export default function Post({post}) {
    
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`); 
            setUser(res.data);
        };
        fetchUser();
    }, [post.userId]);

    const desc = () => {
        if(post.desc) {
           return <span className="postText">{post?.desc}</span>
        }
        return null
    }

    const likeHandler = ()=>{
        setLike(isLiked ? like-1 : like +1);
        setIsLiked(!isLiked);
    }
    const postImg = () =>{
        if(post.img) {
           return <img className="postImage" src={PF+"person/"+post.img} alt="images"/>
        }
        else {
            return "";
        }
    }

    return (
        <div className="post">
            <div className="postWrapper">
                {/* post top */}
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${user.username}`}>
                            <img className="postProfileImg" src={user.profilePicture || PF+"person/avater.jpg"} alt="img"/>
                            </Link>
                            <span className="postUsername">{user.username}</span>
                            <span className="postDate">{format(post.createdAt)}</span>
                        
                    </div>
                    <div className="postTopRight">
                        <FaEllipsisV />
                    </div>
                </div>
                {/* post center/body */}
                <div className="postCenter">
                    {desc()}
                    {/* <span className="postText">{post?.desc}</span> */}
                    {postImg()}
                   
                </div>
                {/* post bottom */}
                <div className="postButtom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" onClick={likeHandler} src="/assets/react/like.png" alt="like"/>
                        <img className="likeIcon" onClick={likeHandler} src="/assets/react/heart.png" alt="heart"/>
                        <span className="postLikeCounter">{like} people like it </span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"> {post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}









