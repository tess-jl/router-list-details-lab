import { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/rickAndMortyApi.js';

export const useCharacters = () => {
  const [charactersArray, setCharactersArray] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState({});

  const handlePageChange = (choice) => {
    if(choice === 'prev' && page > 1) {
      setPage(page - 1);
    } else if(choice === 'next') {
      setPage(page + 1);
    }
  }; 

  const handleCharacterSelection = (characterId) => {
    const foundCharacter = charactersArray.find(character => character.id === characterId);
    console.log(foundCharacter);
    setSelectedCharacter(foundCharacter);
  };


  const getCharacters = () => {
    fetchCharacters(page)
      .then(resultObject => 
        setCharactersArray(resultObject.results));
  };

  useEffect(() => {
    getCharacters();
  }, [page]);

  return { charactersArray, page, handlePageChange, handleCharacterSelection, selectedCharacter };
}; 
