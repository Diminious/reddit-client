import React, { useEffect, useState } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = ""; //useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();
    
    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value)
    }

    useEffect(() => {
        setSearchTermLocal(searchTerm)
    }, [searchTerm])

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        // dispatch(setSearchTerm(searchTermLocal));
    }

    return (
        <header>
            <p>Reddit Client</p>
            <img src="../../reddit-logo.svg" alt="reddit logo"/>
            <form className="search" >
                <input type="text" placeholder="Search something!" value={searchTermLocal} onChange={onSearchTermChange}/>
                <button type="submit" onClick={onSearchTermSubmit}>Search</button>
            </form>
        </header>
    )
}

export default Header;