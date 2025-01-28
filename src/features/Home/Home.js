import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import Comment from "../Comment/Comment";
import { fetchPosts, selectFilteredPosts, setSearchTerm, fetchComments } from "../../store/redditSlice";
import './Home.css'

const Home = () => {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    const [ selectedPost, setSelectedPost ] = useState(null);

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit, dispatch])

    //when clicking a post gets comments and displays them
    const onClickComments = (post) => {
        // console.log("OnClick");
        
        setSelectedPost(post)
        const index = post.permalink;
        console.log(index);
        

        const getComments = (permalink) => {
            console.log("getComments");
            
            dispatch(fetchComments(index, permalink));
        }


        return getComments;
    }

    useEffect(() => {
        if (selectedPost === null) return;
        console.log("Effect: GetComments");
        
        dispatch(fetchComments(selectedPost.permalink, selectedPost.permalink));
    }, [selectedPost, dispatch])

    const renderComments = () => {
        // if(selectedPost === null) return <div></div>

        console.log('RenderComments');
        

        return (
            <div>
                <hr/>
                {selectedPost.comments.map((comment) => (
                    <Comment comment={comment} key={comment.id} />
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
                <button type="button" onClick={() => dispatch(fetchPosts(selectedSubreddit))}>
                    Try Again
                </button>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="error">
                <h2>No posts matching "{searchTerm}"</h2>
                <button type="button" onClick={() => dispatch(setSearchTerm(''))}>
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
                <h2>Comments</h2>
                {selectedPost !== null? renderComments(): <div></div>}
            </aside>
            
        </>
    )
}

export default Home;