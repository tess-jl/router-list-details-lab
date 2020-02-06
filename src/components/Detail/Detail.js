import React from 'react';
import styles from './Detail.css';
import PropTypes from 'prop-types';
import { useCharacter } from '../../hooks/characters';

const Detail = ({ match }) => {
  const { selectedCharacter } = useCharacter(match.params.id);

  return (
    <section className={styles.Detail}>
      <div>
        <h3>{selectedCharacter.name}</h3>
        <img src={selectedCharacter.image} />
        <p>{selectedCharacter.type}</p>
        <p>{selectedCharacter.status}</p>
      </div> 
    </section>
  );
}; 

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Detail;
