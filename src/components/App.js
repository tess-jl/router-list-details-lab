import React from 'react';
// import PropTypes from 'prop-types';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';
import Header from './Header/Header';
import List from './List/List';
import Detail from './Detail/Detail';

export default function App() {
  return (
    <Router>
      <Header />

      <Route path="/character/:id" component={Detail} />

      <Route exact path="/" component={List} />
  
    </Router>
  );
}
