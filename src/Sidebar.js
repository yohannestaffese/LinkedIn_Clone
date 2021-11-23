import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar_recentItems">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQMwq_mZ2I9qpXPhmIeJ5on2jZTavrF65Kw&usqp=CAU"
          alt=""
        />
        {user.photoUrl ? (
          <Avatar src={user.photoUrl}> </Avatar>
        ) : (
          <Avatar> {user.email[0]} </Avatar>
        )}
        {/* {user.photoUrl ? (
          <Avatar src={user.photoUrl}> {user.email[0]} </Avatar>
        ) : null} */}
        {/* <Avatar src={user.photoUrl} className="sidebar_avatar">
          {firstLetter}
        </Avatar> */}

        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2534</p>
        </div>
        <div className="sidebar_stat">
          <p>viewed on post</p>
          <p className="sidebar_statNumber">2588</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactJS")}
        {recentItem("programming")}
        {recentItem("softwareEngineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
