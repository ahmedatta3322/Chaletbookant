import React from "react";
import { Comment, Avatar, Tooltip } from "antd";
import moment from "moment";
import "../../../Styling/comments.css";
export default function GuestsComments({ children }) {
  return (
    <div>
      <Comment
        // actions={[<span key="comment-nested-reply-to">Reply to</span>]}
        author={<span className="user-name">Han Solo</span>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={<p className="comment-body">How artistic!</p>}
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      >
        {/* {children} */}
      </Comment>
    </div>
  );
}
