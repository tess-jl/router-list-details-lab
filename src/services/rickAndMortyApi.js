export const fetchCharacters = (pageNumber) => {
  fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
    .then(res => res.json());
}; 
