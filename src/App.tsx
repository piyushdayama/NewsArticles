import React from 'react';
import './App.css';
import ArticlesList from './articles'

//apiKey:- adc2441b21ac4fd2ae64a253fd1d112e

const App = () => {
  return (
    <div className="App">
      <h1>News Articles</h1>
      <ArticlesList />
    </div>
  );
}

export default App;
