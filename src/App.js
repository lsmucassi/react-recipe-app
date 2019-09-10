import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe'

const App = () => {
  const APP_ID = "f8688dc5";
  const APP_KEY = "1ea80da48f60d5de1825c38e85fde9b9	";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken")
  
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div onSubmit={getSearch} className="App App-header">
      <div className="AppBar">
        <h3>Search For A Recipe</h3>
        <form className="search-form">
          <input className="search-bar" type="text"value={search} onChange={updateSearch} />
          <button className="search-btn" type="submit" value="">Search</button>
        </form>
      </div>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  );
}

export default App;
