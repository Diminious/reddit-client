import React from 'react';
import Header from './features/Header/Header';
import './App.css';
import Subreddits from './features/Subreddits/Subreddits';
import Home from './features/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='body'>
        <aside>
          <Subreddits />
        </aside>
        <Home />
      </div>
    </div>
  );
}

export default App;
