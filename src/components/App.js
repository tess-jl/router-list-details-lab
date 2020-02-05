import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header/Header';
import List from './List/List';
import Detail from './Detail/Detail';

export default function App() {
  return (
    <Router>
      <Header />

      <Detail />

      <List />
  
    </Router>
  );
}
