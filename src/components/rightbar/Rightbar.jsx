import "./rightbar.css";
import {Users} from "../../dummydata";
import Online from "../online/Online";


export default function Rightbar({user}) {


    const HomeRightbar = () => {
        return (
            <>
             <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/react/gift.png" alt=""/>
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today or maybe others too
                    </span>
                </div>
                {/* add image */}
                <img className="rightbarAd" src="/assets/person/3.jpg" alt="" />
                {/* Online friends */}
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">

                   {Users.map(u => {
                       return <Online key={u.id} user={u}/>
                   })}
                   
                </ul>
            </>
        )
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">{user.relationship}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Gender:</span>
                        <span className="rightbarInfoValue">Female</span>
                    </div>
                    <h4 className="rightbarTitle">User friends</h4>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img className="rightbarFollowingImg" src="/assets/person/7.jpg" alt="" />
                            <span className="rightbarFollowingName">John Deo</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img className="rightbarFollowingImg" src="/assets/person/3.jpg" alt="" />
                            <span className="rightbarFollowingName">John Deo</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img className="rightbarFollowingImg" src="/assets/person/5.jpg" alt="" />
                            <span className="rightbarFollowingName">John Deo</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img className="rightbarFollowingImg" src="/assets/person/1.jpg" alt="" />
                            <span className="rightbarFollowingName">John Deo</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img className="rightbarFollowingImg" src="/assets/person/2.jpg" alt="" />
                            <span className="rightbarFollowingName">John Deo</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
              {user ?  <ProfileRightbar /> : <HomeRightbar /> } 
            </div>
        </div>
    );
}