import { useState, useEffect } from 'react';
import { fetchCharacters, fetchCharacter } from '../services/rickAndMortyApi.js';

export const useCharacters = () => {
  const [charactersArray, setCharactersArray] = useState([]);
  const [page, setPage] = useState(1);


  const handlePageChange = (choice) => {
    if(choice === 'prev' && page > 1) {
      setPage(page - 1);
    } else if(choice === 'next') {
      setPage(page + 1);
    }
  }; 

  const getCharacters = () => {
    fetchCharacters(page)
      .then(resultObject => 
        setCharactersArray(resultObject.results));
  };

  useEffect(() => {
    getCharacters();
  }, [page]);

  return { charactersArray, page, handlePageChange };
}; 

export const useCharacter = characterId => {
  const [selectedCharacter, setSelectedCharacter] = useState({});

  const getCharacter = () => {
    fetchCharacter(characterId)
      .then(setSelectedCharacter);
  }; 

  useEffect(() => {
    getCharacter(characterId);
  }, [characterId]);
  
  return { selectedCharacter };
};
