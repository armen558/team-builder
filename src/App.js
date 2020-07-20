import React from 'react';

import Header from './components/Header/Header';
import TeamBuilder from './components/TeamBuilder/TeamBuilder';

import './App.css';

const App = () => {
  return (
    <div id="main">
      <Header />
      <div className="container">
        <TeamBuilder />
      </div>
    </div>
  );
};

export default App;
