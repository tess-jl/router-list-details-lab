import React from 'react';
import { useCharacters } from '../../hooks/characters';

const List = () => {
  const { charactersArray } = useCharacters();

  const makeList = () => {
    const characterItems = charactersArray.map((character, i) => (  
      <li key={i}>
        <img src={character.image} />
        <h3>{character.name}</h3>
      </li>
    ));
    return (
      <ul>
        {characterItems}
      </ul>
    );
  }; 


  return (
    <>
      <button>prevPage</button>
      <button>nextPage</button>
      {makeList()}
    </>
  );
};

export default List; 
