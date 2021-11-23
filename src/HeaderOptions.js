import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./HeaderOptions.css";

function HeaderOptions({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && (
        <Avatar className="headerOption_icon">
          {user && user.email[0] ? user.email[0] : null}
        </Avatar>
        // {user?.email[0]}
      )}
      {/* {user.photoUrl ? (
          <Avatar src={user.photoUrl}> </Avatar>
        ) : (
          <Avatar> {user.email[0]} </Avatar>
        )} */}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
