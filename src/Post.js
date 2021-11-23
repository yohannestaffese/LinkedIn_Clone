import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./Post.css";
import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import ChatSharpIcon from "@mui/icons-material/ChatSharp";
import ShareSharpIcon from "@mui/icons-material/ShareSharp";
import SendSharpIcon from "@mui/icons-material/SendSharp";

import InputOptions from "./InputOptions";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        {photoUrl || name ? <Avatar src={photoUrl}> {name[0]} </Avatar> : null}
        {/* <Avatar src={photoUrl}>{name[0]} </Avatar> */}

        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post_buttons">
        <InputOptions Icon={ThumbUpAltSharpIcon} title="Like" color="gray" />
        <InputOptions Icon={ChatSharpIcon} title="Comment" color="gray" />
        <InputOptions Icon={ShareSharpIcon} title="Share" color="gray" />
        <InputOptions Icon={SendSharpIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
