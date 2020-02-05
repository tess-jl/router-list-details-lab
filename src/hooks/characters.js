import { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/rickAndMortyApi.js';

export const useCharacters = () => {
  const [charactersArray, setCharactersArray] = useState([]);

  const getCharacters = () => {
    fetchCharacters(1)
      .then(array => setCharactersArray(array));
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return { charactersArray };
}; 
