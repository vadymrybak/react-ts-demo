import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import Person from './model/Person';
import { Strength } from './model/Strenth';

class App extends React.Component {
  private myself: Person;

  constructor(props: any) {
    super(props);
    this.myself = new Person("Vadym", 29); 
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, {this.myself.getName()}</h1>
        </header>
        <p>You are { Strength[this.myself.getStrenth()] }</p>
        <p className="App-intro">
          
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
