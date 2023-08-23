import React from 'react';

const Articles = ({ meals }) => {
  return (
    <div className="recepies-container">
      {meals.map((meal) => (
        <div className="meal-card">
          <h2>{meal.strMeal}</h2>
          <p>Origin : {meal.strArea}</p>
          <img src={meal.strMealThumb} alt={'photo ' + meal.strMeal} />
          <p className="meal-instructions">{meal.strInstructions}</p>
        </div>
      ))}
    </div>
  );
};

export default Articles;
