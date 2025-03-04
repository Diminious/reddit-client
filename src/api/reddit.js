export const API_ROOT = "https://www.reddit.com"

export const getSubredditPosts = async (subreddit) => {
    const response = await fetch(`${API_ROOT}${subreddit}.json`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
}

export const getSubreddits = async () => {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();

    return json.data.children.map((subreddit) => subreddit.data);
}

export const getSubredditName = async (subName) => {
    const response = await fetch(`${API_ROOT}/r/${subName}.json`);
    const json = await response.json();

    return json.data.children[0].data.subreddit//.map((subreddit) => subreddit.data);
}

export const getPostComments = async (permalink) => {
    console.log("getting COMMENTS");
    
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    const json = await response.json();

    console.log(json[1].data.children.map((subreddit) => subreddit.data));
    

    return json[1].data.children.map((subreddit) => subreddit.data);
}