import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import Comment from "../Comment/Comment";
import { fetchPosts, selectFilteredPosts, setSearchTerm } from "../../store/redditSlice";
import { fetchComments } from "../../store/commentSlice";
import './Home.css'

const Home = () => {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const postComments = useSelector((state) => state.comments)
    const { commentsLoading, commentsError } = postComments;
    const commentsState = useSelector((state) => state.comments.comments)
    const dispatch = useDispatch();

    const [ selectedPost, setSelectedPost ] = useState(null);

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
        dispatch(setSearchTerm(''));
        setSelectedPost(null);
        console.log("HOME UseEffect");
        
    }, [selectedSubreddit, dispatch])

    //when clicking a post gets comments and displays them
    const onClickComments = (post) => {
        setSelectedPost(post)
    }

    useEffect(() => {
        if (selectedPost === null) return;
        
        dispatch(fetchComments(selectedPost.permalink, selectedPost.permalink));
    }, [selectedPost, dispatch])

    const renderComments = () => {
        if(selectedPost === null) return (
            <div>
                <p>Select a post to view comments.</p>
            </div>
        )

        if(commentsError) return (
            <div>
                <p>Error loading comments.</p>
            </div>
        )

        if(commentsLoading) return (
            <div>
                <p>Loading comments...</p>
            </div>
        )

        return (
            <div>
                {commentsState.comments?.map((comment, index) => (
                    <>
                        {index > 0? <hr/>: null}
                        <Comment comment={comment} key={comment.id} />
                    </>
                ))}
            </div>
        )
    }

    //Post states
    if (isLoading) {
        return (
            <p className="loading-text">Loading...</p>
        )
    }

    if (error) {
        return (
            <div className="error">
                <h2>Failed to load posts.</h2>
                <p>Check the subreddit name was entered correctly.</p>
                <button type="button" className="standard-button" onClick={() => dispatch(fetchPosts(selectedSubreddit))}>
                    Try Again
                </button>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="error">
                <h2>No posts matching "{searchTerm}"</h2>
                <button type="button" className="standard-button" onClick={() => dispatch(setSearchTerm(''))}>
                    Go Back
                </button>
            </div>
        )
    }

    return (
        <>
            <main>
                {posts.map((post, index) => {
                    return (
                        <>
                            {index !== 0? <hr/> : null}
                            <Post key={post.id} post={post} onClickComments={onClickComments}/>
                        </>
                    )
                })}
            </main>
            <aside className='comments-aside'>
                <div>
                    <h2>Comments</h2>
                    {renderComments()}
                </div>
            </aside>
            
        </>
    )
}

export default Home;