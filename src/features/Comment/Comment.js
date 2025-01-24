import React from "react";
import ReactMarkdown from 'react-markdown'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import './Comment.css';
dayjs.extend(relativeTime);

const Comment = (props) => {
    const { comment } = props;

    return (
        <div className="comment">
            <div className="comment-metadata">
                <p className="comment-author">{comment.author}</p>
                <p className="comment-created-time">{dayjs.unix(comment.created_utc).fromNow()}</p>
            </div>
            <ReactMarkdown children={comment.body} />
        </div>
    )
}

export default Comment;