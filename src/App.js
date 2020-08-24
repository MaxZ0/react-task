import React from 'react';
import Heading from './components/Heading';
import Sub from './components/Sub';
import Card from './components/Card';
import Subtext from './components/Subtext';
import Foot from './components/Foot';
import "./sass/App.scss"

function App() {
  return (
    <div className="App bg-secondary">
      <header className="App-header">
        <Heading />
        <Sub />
        <Subtext />
      </header>
      <Card />
      <footer>
        <Foot />
      </footer>

    </div>
  );
}

export default App;
