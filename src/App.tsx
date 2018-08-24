import * as React from 'react';

import './App.css';
import ApiService from './model/Api';  
import logo from './logo.svg';

import Person from './model/Person';
import { Strength } from './model/Strenth';



interface IMyState { loading: boolean };

class App extends React.Component<{}, IMyState> {
  private myself: Person;

  constructor(props: any) {
    super(props);
    this.state = {
      loading: true
    };

    this.myself = new Person("Vadym", 29); 

    const data$ = ApiService.getData().subscribe(result => {
      console.log("result is: ", result);
      this.setState({
        loading: false
      });
    });
  }

  public handleClick = (e: any, a: string = "test") => {
    console.log("output", a);
  }

  public render() {
    const loading = this.state.loading === true ? <h1>I am loading...</h1> : '';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, {this.myself.getName()}</h1>
        </header>
        {loading}
        <button onClick={this.handleClick}>Click</button>
        <p>You are { Strength[this.myself.getStrenth()] }</p>
        <p className="App-intro">
          
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
