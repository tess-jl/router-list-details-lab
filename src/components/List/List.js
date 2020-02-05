import React from 'react';
import { useCharacters } from '../../hooks/characters';

const List = () => {
  const { charactersArray, handlePageChange, page, handleCharacterSelection } = useCharacters();

  const makeList = () => {
    const characterItems = charactersArray.map(({ id, image, name }) => (  
      <li key={id} onClick={() => handleCharacterSelection(id)}>
        <img src={image} />
        <h3>{name}</h3>
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
      <button value="prev" onClick={({ target }) => handlePageChange(target.value)}>prevPage</button>
      <p>{page}</p>
      <button value="next" onClick={({ target }) => handlePageChange(target.value)}>nextPage</button>
      {makeList()}
    </>
  );
};

export default List; 
