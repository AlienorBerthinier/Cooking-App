import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

const Header = ({ onSearchSubmit }) => {
  const [inputSearch, setInputSearch] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearchSubmit(inputSearch);
    }
  };

  return (
    <div className="header">
      <h1>React Cooking App</h1>
      <Input
        className="input"
        icon="search"
        placeholder="Tapez le nom d'un aliment (en anglais)"
        value={inputSearch}
        onChange={(event) => setInputSearch(event.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default Header;
