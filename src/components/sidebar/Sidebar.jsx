import {FaBookOpen, FaWeixin, FaUsers, FaBookmark, FaArchive, FaRegCalendar,FaBroadcastTower} from "react-icons/fa";
import CloseFriend from "../closeFriend/CloseFriend";
import {Users} from "../../dummydata";

import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                {/* sidebar links list */}
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <FaBookOpen className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <FaWeixin className="sidebarIcon" />
                        <span className="sidebarListItemText">Video</span>
                    </li>
                    <li className="sidebarListItem">
                        <FaBookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmark</span>
                    </li>
                    <li className="sidebarListItem">
                        <FaUsers className="sidebarIcon" />
                        <span className="sidebarListItemText">Group</span>
                    </li>
                    <li className="sidebarListItem">
                        <FaArchive className="sidebarIcon" />
                        <span className="sidebarListItemText">Job</span>
                    </li>
                    <li className="sidebarListItem">
                        <FaRegCalendar className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <FaBroadcastTower className="sidebarIcon" />
                        <span className="sidebarListItemText">Service</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                {/* online friends list */}
                <ul className="sidebarFriendList">
                   {Users.map(u => {
                       return <CloseFriend key={u.id} user={u}/>
                   })}
                </ul>

            </div>
        </div>
    );

}