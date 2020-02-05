import React, { useState, useEffect } from 'react';
import getCharacters from '../services/rickAndMortyApi.js';

const useCharacters = () => {
  [charactersArray, setCharactersArray] = useState([]);

  useEffect(() => {
    getCharacters(1)
      .then(array => setCharactersArray(array))

  }, []);

}; 

export { charactersArray };

