import React from "react";
import Card from "../../component/Card/Card";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import './Post.css'
dayjs.extend(relativeTime);

const Post = (props) => {
    const {post, onToggleComments} = props;

    return (
        <article key={post.id}>
            <Card>
                <div className="post-container">
                    <h3>{post.title}</h3>
                    <div className="post-text-container">
                        <p className="post-text">{post.bodyText}</p>
                    </div>
                    <div className="post-image-container">
                        <img src={post.imageSrc} alt="post" className="post-image"/>
                    </div>
                </div>

                <div className="post-details">
                    <span className="author-username">{post.author}</span>
                    <span>{dayjs.unix(post.created_utc).fromNow()}</span>
                </div>
            </Card>
        </article>
    )
}

export default Post;