import React from "react";
import ReactMarkdown from 'react-markdown'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import './Post.css'
dayjs.extend(relativeTime);

const Post = (props) => {
    const {post, onClickComments} = props;

    const displayMedia = (mediaPost) => {
        switch (mediaPost.post_hint) {
            case "image":
                return (
                    <div className="post-media-container">
                        <img src={mediaPost.url} alt="post" className="post-media"/>
                    </div>
                )
            
            default: 
                return (
                    <div className="post-media-container">
                        <a href={mediaPost.url} target="blank" alt="link" className="post-media">Link to media</a>
                    </div>
                )
        }
    }

    return (
        <article key={post.id} onClick={() => onClickComments(post)}>
                <div className="post-container">
                    <h3>{post.title}</h3>
                    <div className="post-text-container">
                        <ReactMarkdown className="post-text" children={post.selftext} />
                    </div>
                    {displayMedia(post)}
                </div>

                <div className="post-details">
                    <span className="author-username">u/{post.author}</span>
                    <span>{dayjs.unix(post.created_utc).fromNow()}</span>
                </div>
        </article>
    )
}

export default Post;