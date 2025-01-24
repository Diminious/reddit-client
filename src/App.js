import React from 'react';
import Header from './features/Header/Header';
import './App.css';
import Subreddits from './features/Subreddits/Subreddits';
import Post from './features/Post/Post';

//! FOR TESTING
const testPost = {
  id: 1,
  title: "I can't believe it's not magic!",
  bodyText: "This isn't real!",
  author: "u/internetfunnyman",
  imageSrc: "",
  created_utc: 1331042771.332
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
          <p>Posts</p>
          <Post post={testPost} />
        </main>
        <aside className='comments-aside'>
          <p>Comments</p>
        </aside>
      </div>
    </div>
  );
}

export default App;
