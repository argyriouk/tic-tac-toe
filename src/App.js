import React from 'react';
import './App.css';
import { BoardGame } from './components';

const App = () => {
  return (
    <section>
      <h1>Tic Tac Toe</h1>
      <div >
        <BoardGame className="container" />
      </div>
    </section>
  );
}

export default App;
