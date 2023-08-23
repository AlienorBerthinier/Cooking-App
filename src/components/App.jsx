import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Articles from './Articles';
import Header from './Header';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [inputSearch, setInputSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputSearch
      )
      .then((response) => {
        setMeals(response.data.meals);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données', error);
      });
  }, [inputSearch]);

  const handleSearchSubmit = (searchValue) => {
    setInputSearch(searchValue);
  };

  return (
    <div className="App">
      <Header onSearchSubmit={handleSearchSubmit} />
      <Articles meals={meals} />
    </div>
  );
};

export default App;
