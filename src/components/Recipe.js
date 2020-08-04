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
  const ingredientsList = Object.keys(recipe).filter(elem => elem.includes("strIngredient")).map(elem => recipe[elem]).filter(n => n);
  const measuresList = Object.keys(recipe).filter(elem => elem.includes("strMeasure")).map(elem => recipe[elem]).filter(n => n);
  const instruction = strInstructions.split(".").filter(elem => elem);

  return (
    <div>
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
            <ul className="list">
              {ingredientsList.map((elem, i) => (
                <li>
                  <span className="measure">{measuresList[i]}</span> {elem}
                </li>
              ))}

            </ul>

          </div>
          <div className="method">
            <h3>Method</h3>
            <div className="description">
              {instruction.map(elem => (
                <p className="sentence">{elem}.</p>
              ))}
            </div>
          </div>
        </div>
        {strSource ? (<a
          href={strSource}
          className="source"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to source
        </a>) : ""}

      </div>

    </div>
  );
};

export default Recipe;
