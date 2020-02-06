import React from 'react'; 
import styles from './Header.css';
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
  const location = useLocation();


  return (
    <header className={styles.Header}>
      <h1>Rick and Morty... again?! yes, again</h1>

      {
        location.pathname.includes('/character/') ? <nav><Link to='/'>Home</Link></nav> : null
      }
    </header>
  );
};

export default Header; 
