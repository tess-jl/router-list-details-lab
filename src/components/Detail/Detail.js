import React from 'react';
import { useCharacters } from '../../hooks/characters';

const Detail = () => {
  const { selectedCharacter } = useCharacters();

  return (
    <>
      <h3>{selectedCharacter.name}</h3>
      <p>{selectedCharacter.type}</p>
      <p>{selectedCharacter.status}</p>
    </>
  );
}; 


export default Detail;
