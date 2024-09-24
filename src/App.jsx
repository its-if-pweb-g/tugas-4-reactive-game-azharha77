import React from 'react';
import './App.css';
import Quiz from './components/Quiz';

const App = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <p>Reactive Quiz Game</p>
      </nav>
      <Quiz />
      <footer className="footer">
        <p>Azhar Hafiz Andanianto</p>
      </footer>
    </div>
  );
};

export default App;