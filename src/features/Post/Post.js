import React from "react";
import Card from "../../component/Card/Card";
import moment from 'moment';
// import './Post.css'


const Post = (props) => {
    const {post, onToggleComments} = props;

    return (
        <article key={post.id}>
            <Card>
                <div className="post-container">
                    <h3>Post Title</h3>

                    <div className="post-image-container">
                        <img src="" alt="post" className="post-image"/>
                    </div>
                </div>

                <div className="post-details">
                    <span className="author-username">Post Author</span>
                    <span>{moment.unix(post.created_utc).fromNow()}</span>
                </div>
            </Card>
        </article>
    )
}

export default Post;