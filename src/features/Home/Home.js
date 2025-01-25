import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import { fetchPosts, selectFilteredPosts, setSearchTerm, fetchComments } from "../../store/redditSlice";
import './Home.css'

const Home = () => {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit, dispatch])

    //when clicking a post gets comments and displays them
    const onClickComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink));
        }

        return getComments;
    }

    if (isLoading) {
        return (
            <p>Loading...</p>
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
            {posts.map((post, index) => (
                <>
                    <hr />
                    <Post key={post.id} post={post} onClickComments={onClickComments(index)} />
                </>
            ))}
        </>
    )
}

export default Home;