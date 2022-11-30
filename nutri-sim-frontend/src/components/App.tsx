import React from 'react';
import '../styles/App.css';
import { StatusDisplay } from './StatusDisplay';

export default class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
          <StatusDisplay />
      </div>
    );
  }
}
