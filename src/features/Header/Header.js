import React, { useEffect, useState } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, setSelectedSubreddit } from '../../store/redditSlice';

const Header = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const [subredditSearch, setSubredditSearch] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();
    
    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value)
    }

    const onSubredditSearchChange = (e) => {
        setSubredditSearch(e.target.value)
    }

    useEffect(() => {
        setSearchTermLocal(searchTerm)
    }, [searchTerm])

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
    }

    const onSubredditSearchSubmit = (e) => {
        e.preventDefault();
        dispatch(setSelectedSubreddit(`/r/${subredditSearch}/`));
    }

    return (
        <header>
            <h1>Reddit Viewer</h1>
            <img className="desktop" src="../../reddit-logo.svg" alt="reddit logo"/>
            <form className="load-subreddit mobile" >
                <input type="text" className="standard-input" placeholder="Enter subreddit (after r/)" value={subredditSearch} onChange={onSubredditSearchChange}/>
                <button type="submit" disabled={subredditSearch <= 0} onClick={onSubredditSearchSubmit} className="standard-button">Load</button>
            </form>
            <form className="search desktop" >
                <input type="text" className="standard-input" placeholder="Search something!" value={searchTermLocal} onChange={onSearchTermChange}/>
                <button type="submit" onClick={onSearchTermSubmit} className="standard-button">Search</button>
            </form>
        </header>
    )
}

export default Header;