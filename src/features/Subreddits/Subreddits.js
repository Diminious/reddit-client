import React, { useEffect } from "react";
import Card from "../../component/Card/Card";
// import './Subreddits.css';

const testSubsList = [
    {
        name: "Sub1"
    },
    {
        name: "Sub2"
    },
    {
        name: "Sub3"
    }
];

const testSelectedSub = testSubsList[0];

const Subreddits = () => {

    return (
        <Card className="subreddit-card">
            <h2>Subreddits</h2>
            <ul className="subreddits-list">
                {testSubsList.map((subreddit) => (
                    <li key={subreddit.name} className={`${testSelectedSub.name === subreddit.name && `selected-subreddit`}`}>
                        <button type="button" onClick={() => {console.log(`${subreddit.name} Pressed`)}}>
                            {subreddit.name}
                        </button>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default Subreddits;