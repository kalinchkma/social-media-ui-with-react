import "./topbar.css";
import {BsSearch, BsFillPersonFill, BsFillChatSquareDotsFill, BsFillBellFill,BsFillHouseDoorFill,BsClockHistory} from "react-icons/bs";
import {Link} from "react-router-dom";

export default function Topbar() {
    return (
        <div className="topbarContainer">
            {/* left bar */}
            <div className="topbarLeft">
                <Link to="/">
                     <img src="/assets/person/3.jpg" className="logo" alt="Logo" />
                </Link>
                 {/* links */}
                <div className="topbarLinks"> 
                    <span className="topbarLink"><BsFillHouseDoorFill className="topbarLinkIcon" /></span>
                    <span className="topbarLink"><BsClockHistory className="topbarLinkIcon" /></span>
                    <span className="topbarLink"><BsClockHistory className="topbarLinkIcon" /></span>
                    <span className="topbarLink"><BsClockHistory className="topbarLinkIcon" /></span>
                </div>
            </div>
            {/* middle bar */}
            <div className="topbarCenter">
                <div className="searchbar">
                    <BsSearch className="searchIcon" />
                    <input placeholder="Search" className="searchInput" />
                </div>
            </div>
            {/* right bar */}
            <div className="topbarRight">
            
                {/* icons and action */}
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <BsFillPersonFill className="icon_t" />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <BsFillChatSquareDotsFill className="icon_t" />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <BsFillBellFill className="icon_t" />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/2.jpg" alt="Profile" className="topbarImg" />
            </div>
        </div>
    );
}