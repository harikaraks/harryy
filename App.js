import React from "react";
import './App.css';
import Axios from "axios";
import { useState } from "react";
import './Product.js';
function App() {
  const [query,setquery]=useState("");
  const [recipes, setrecipes]=useState([]);
  const YOUR_APP_ID ="9faa705d";
  const YOUR_APP_KEY = "12614e8221399f6a84b31af84247dd58";
  var url='https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free';
async function getRecipes() {
  var result=await Axios.get(url);
  setrecipes(result.data.hits);
  console.log(result.data);
}
const onSubmit = (e) => {
  e.preventDefault();
  getRecipes();
};
  return (
    <div className="app">
      <h1>FoodSerachingApp</h1>
      <form className="app__searchForm">
        <input type="text" className="app__input" placeholder="enter ingridient"
        value={query} onChange={(e) => setquery
        (e.target.value)}/>
        <input className="app__submit" type="submit" value="search"/>
      </form>
      <div>
      {recipes.map((recipe) => {
          return <product recipe={recipe}/>
           })}
      
      </div>
      
    </div>
  );
}

export default App;
