import React from 'react';
import { useCharacters } from '../../hooks/characters';
import { Link } from 'react-router-dom';

const List = () => {
  const { charactersArray, handlePageChange, page } = useCharacters();

  const makeList = () => {
    const characterItems = charactersArray.map(({ id, image, name }) => (  
      <li key={id}>
        <Link to={`/character/${id}`}>
          <img src={image} />
          <h3>{name}</h3>
        </Link>
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
