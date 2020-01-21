import React, { useState, useEffect } from 'react';
import './App.css';

// compoents
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [count, setCount] = useState(1);
  const [posts, setPosts] = useState([]);

  const headerTitle = 'Esse é o header caraio!';

  // ciclo de vida do react
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then(response => response.json())
      .then(json => setPosts(json));
  }

  const addPost = (newPost) => {
    const newPosts = [...posts, newPost];
    // newPosts.push(newPost);
    setPosts(newPosts);
  }

  return (
    <div className="App">

      <Header title={headerTitle} number={count} />

      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <br />
      <hr />

      <Dashboard posts={posts} sendNewPost={addPost} />

    </div>
  );
}

export default App;


// manipulação de dados no React
// 1 - props
// 2 - state
// 3 - hooks