import React from 'react';
import styles from './List.css';
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
      <ul className={styles.List}>
        {characterItems}
      </ul>
    );
  }; 


  return (
    <>
      <div className={styles.List}>
        <button value="prev" onClick={({ target }) => handlePageChange(target.value)}>prevPage</button>
        <p>{page}</p>
        <button value="next" onClick={({ target }) => handlePageChange(target.value)}>nextPage</button>
        {makeList()}
      </div>
    </>
  );
};

export default List; 
