import { Avatar } from '@mui/material';
import React from 'react'
import "./Post.css";

function Post({ name, description, message, photoURL }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>Gurprem Bhullar</h2>
                    <p>description</p>
                </div>
            </div>

            <div className="post__body">
                <p>Message goes here</p>
            </div>
        </div>
    );
}

export default Post;
