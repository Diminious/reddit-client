import React from 'react';
import Header from './features/Header/Header';
import './App.css';
import Subreddits from './features/Subreddits/Subreddits';
import Post from './features/Post/Post';
import Comment from './features/Comment/Comment';

//! FOR TESTING
const testPost = [{
  id: 1,
  title: "I can't believe it's not magic!",
  bodyText: "This isn't real!",
  author: "u/internetfunnyman",
  imageSrc: "",
  created_utc: 1331042771.332
},
{
  id: 2,
  title: "Have you seen this man",
  bodyText: "I dont know what to say about this as its not something ive ever seen before but do you know him???",
  author: "u/website_boringdude",
  imageSrc: "",
  created_utc: 1731042771.332
}]

const testComment = {
  author: "u/nomanslame",
  body: "That's so TRUEEEE!",
  created_utc: 1661092771.0
}

function App() {
  return (
    <div className="App">
      <Header />
      <div className='body'>
        <aside>
          <Subreddits/>
        </aside>
        <main>
          <Post post={testPost[0]} />
          <hr/>
          <Post post={testPost[1]} />
        </main>
        <aside className='comments-aside'>
          <h2>Comments</h2>
          <Comment comment={testComment}/>
          <hr/>
          <Comment comment={{author: "u/mansCoool", body: "Lair! I read the docs!!", created_utc: 1661092771.0}} />
        </aside>
      </div>
    </div>
  );
}

export default App;
