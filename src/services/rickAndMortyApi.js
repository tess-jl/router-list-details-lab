export const fetchCharacters = (pageNumber) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
    .then(res => res.json());
}; 

export const fetchCharacter = (characterId) => {
  return fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
    .then(res => res.json());
};
