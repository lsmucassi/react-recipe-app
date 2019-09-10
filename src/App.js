import React from 'react';
// import logo from './logo.svg';Z
import './App.css';

const App = () => {
  const APP_ID = "f8688dc5";
  const APP_KEY = "1ea80da48f60d5de1825c38e85fde9b9	";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App App-header">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-btn" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
