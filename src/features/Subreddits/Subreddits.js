import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../component/Card/Card";
import { fetchNewSubreddit, fetchSubreddits, selectSubreddits, selectUserSubreddits, removeUserAddedSubreddit } from "../../store/subRedditSlice";
import './Subreddits.css';
import {
    setSelectedSubreddit,
    selectSelectedSubreddit
} from "../../store/redditSlice";

const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const userSubreddits = useSelector(selectUserSubreddits);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);
    const [ subredditInput, setSubredditInput ] = useState("");
    const { addingLoading } = useSelector((state) => state.subreddits)

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch])

    const onAddSubredditInputChange = (e) => {
        e.preventDefault();
        setSubredditInput(e.target.value);
    }

    const addSubreddit = (e) => {
        e.preventDefault();

        if(userSubreddits.find((element) => element.display_name.toLowerCase() === subredditInput.toLowerCase())) {
            alert("Subreddit already exists in list.");
            return;
        }

        dispatch(fetchNewSubreddit(subredditInput));
    }

    const loadingNewSub = () => {
        if(addingLoading) {
            return (
                <li>
                    <button type="button">
                        Checking...
                    </button>
                </li>
            )
        }
    }

    const removeSubreddit = (name) => {
        dispatch(removeUserAddedSubreddit(name));
    }

    return (
        <Card className="subreddit-card">
            <h2>Subreddits</h2>
            <form className="add-subreddit" >
                <input type="text" className="standard-input" placeholder="Enter subreddit (after r/)" value={subredditInput} onChange={onAddSubredditInputChange}/>
                <button type="submit" disabled={subredditInput.length === 0} onClick={addSubreddit} className="standard-button">Add Subreddit</button>
            </form>

            <ul className="subreddits-list">
                {loadingNewSub()}
                {userSubreddits.map((subreddit, index) => (
                    <li key={index} className={`${selectedSubreddit === subreddit.url && `selected-subreddit`} ${subreddit.exists? ``: "nonexistant"} userAdded`}>
                        <button type="button" onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}>
                            <span className="remove-button" onClick={() => removeSubreddit(subreddit.display_name)}>x</span>{subreddit.display_name}
                        </button>
                    </li>
                ))}
                <hr/>
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