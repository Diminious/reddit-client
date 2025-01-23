import React from 'react';
import Header from './features/Header/Header';
import './App.css';
import Subreddits from './features/Subreddits/Subreddits';

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
        </main>
        <aside className='comments-aside'>
          <p>Comments</p>
        </aside>
      </div>
    </div>
  );
}

export default App;
