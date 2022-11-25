import React from 'react';
import './App.css';
import { StatusDisplay } from '../status_display/StatusDisplay';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <StatusDisplay />
    </div>
  );
}

export default App;
