import React from 'react';
import PropTypes from 'prop-types';
import { useCharacter } from '../../hooks/characters';

const Detail = ({ match }) => {
  const { selectedCharacter } = useCharacter(match.params.id);

  return (
    <>
      <h3>{selectedCharacter.name}</h3>
      <p>{selectedCharacter.type}</p>
      <p>{selectedCharacter.status}</p>
    </>
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
