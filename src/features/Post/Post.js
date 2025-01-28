import React from "react";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import './Post.css'
dayjs.extend(relativeTime);

const Post = (props) => {
    const {post, onClickComments} = props;

    return (
        <article key={post.id} onClick={() => onClickComments(post)}>
                <div className="post-container">
                    <h3>{post.title}</h3>
                    <div className="post-text-container">
                        <p className="post-text">{post.bodyText}</p>
                    </div>
                    <div className="post-image-container">
                        <img src={post.url} alt="post" className="post-image"/>
                    </div>
                </div>

                <div className="post-details">
                    <span className="author-username">u/{post.author}</span>
                    <span>{dayjs.unix(post.created_utc).fromNow()}</span>
                </div>
        </article>
    )
}

export default Post;