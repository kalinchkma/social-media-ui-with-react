import {FaRegImages,FaFlushed,FaFlag,FaUserFriends} from 'react-icons/fa';
import "./share.css";


export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/person/1.jpg" alt="profile" />
                    <input placeholder="What's in your mind" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <FaRegImages style={{color: "tomato"}} className="shareIcon" />
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <FaUserFriends style={{color: "blue"}} className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <FaFlag style={{color: "green"}} className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <FaFlushed style={{color: "goldenrod"}} className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
}

