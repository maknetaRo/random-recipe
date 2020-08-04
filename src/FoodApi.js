import React, { useState } from "react";
import Axios from "axios";

import Recipe from "./components/Recipe";
import Ingredinets from "./components/Ingredients";

const FoodApi = () => {
  const [recipes, setRecipes] = useState([]);
  const getData = async () => {
    const result = await Axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    console.log(result);
    setRecipes(result.data.meals);
  };
  const style = {
    background: "#3DC79D",
    padding: "0.75rem 1.5rem",
    borderRadius: "3px",
    cursor: "pointer",
    border: "none",
    marginTop: "1.5rem",
  };
  return (
    <div>
      <button style={style} onClick={getData}>
        Random Recipe
      </button>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => (
            <>
              <Recipe key={recipe.idMeal} recipe={recipe} />
            </>
          ))}
      </div>
    </div>
  );
};

export default FoodApi;
