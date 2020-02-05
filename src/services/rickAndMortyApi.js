export const fetchCharacters = (pageNumber) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
    .then(res => res.json());
}; 
