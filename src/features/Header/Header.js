import React, { useEffect, useState } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from '../../store/redditSlice';

const Header = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();
    
    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value)
    }

    useEffect(() => {
        setSearchTermLocal(searchTerm)
    }, [searchTerm])

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
    }

    return (
        <header>
            <h1>Reddit Viewer</h1>
            <img className="desktop" src="../../reddit-logo.svg" alt="reddit logo"/>
            <form className="search" >
                <input type="text" className="standard-input" placeholder="Search something!" value={searchTermLocal} onChange={onSearchTermChange}/>
                <button type="submit" disabled={searchTermLocal <= 0} onClick={onSearchTermSubmit} className="standard-button">Search</button>
            </form>
        </header>
    )
}

export default Header;