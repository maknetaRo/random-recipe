import React from "react";

const Recipe = ({ recipe }) => {
  const {
    strSource,
    strInstructions,
    strMeal,
    strCategory,
    strArea,
    strMealThumb,
  } = recipe;

  return (
    <div className="card">
      <div className="image-card">
        <img className="image" src={strMealThumb} alt={strMeal} />
      </div>
      <div className="main-banner">
        <div className="title">
          <h1>{strMeal}</h1>
        </div>
        <div className="category-row">
          <h3>
            <span className="smaller">Category:</span> {strCategory}{" "}
          </h3>
          <h3>
            <span className="smaller">Cusine:</span> {strArea}
          </h3>
        </div>
      </div>
      <div className="recipe">
        <div className="ingredients">
          <h3>Ingredinets</h3>
          <ul className="list"></ul>
        </div>
        <div className="method">
          <h3>Method</h3>
          <p className="description">{strInstructions}</p>
        </div>
      </div>
      <a
        href={strSource}
        className="source"
        target="_blank"
        rel="noopener noreferrer"
      >
        {strSource}
      </a>
    </div>
  );
};

export default Recipe;
