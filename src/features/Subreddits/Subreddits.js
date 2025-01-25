import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../component/Card/Card";
import { fetchSubreddits, selectSubreddits } from "../../store/subRedditSlice";
import './Subreddits.css';
import {
    setSelectedSubreddit,
    selectSelectedSubreddit
} from "../../store/redditSlice";

const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);

    useEffect(() => {
        dispatch(fetchSubreddits);
    }, [dispatch])

    console.log(subreddits.length)

    return (
        <Card className="subreddit-card">
            <h2>Subreddits</h2>
            <ul className="subreddits-list">
                {subreddits.map((subreddit) => (
                    <li key={subreddit.id} className={`${selectedSubreddit === subreddit.url && `selected-subreddit`}`}>
                        <button type="button" onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}>
                            {subreddit.display_name}
                        </button>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default Subreddits;