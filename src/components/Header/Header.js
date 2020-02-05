import React from 'react'; 
import { Link } from 'react-router-dom';


const Header = () => (
  <header>
    <h1>Rick and Morty... again?! yes, again</h1>

    <nav>
      <Link to='/'>back to list</Link>
    </nav>
  </header>
);

export default Header; 
