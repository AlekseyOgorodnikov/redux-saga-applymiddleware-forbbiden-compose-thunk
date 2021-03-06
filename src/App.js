import React from 'react';
import PostForm from './components/postForm';
import Posts from './components/Posts';
import FetchedPost from './components/FetchedPost';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные Посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPost />
        </div>
      </div>
    </div>
  );
}

export default App;
