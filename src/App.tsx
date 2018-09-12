import * as React from 'react';
import './App.css';
import 'dist/semantic.min.css';
import ApiService from './model/Api';  
import NewError from './model/NewError';
import logo from './logo.svg';
import Person from './model/Person';
import { Strength } from './model/Strenth';

// RxJS
import {  retry, retryWhen, flatMap, delay,map, debounceTime, distinctUntilChanged, mergeMap, switchMap, tap } from 'rxjs/operators';
import { from, Observable, BehaviorSubject, Subject, forkJoin, fromEvent } from 'rxjs';

// Semantic
import { Loader, Header, Input, Button, Form, TextArea  } from 'semantic-ui-react'

// XML to JSON
import  * as convert  from 'xml-js';


interface IMyState { loading: boolean };





class App extends React.Component<{}, IMyState> {
  private myself: Person;
  private seachSubject$: BehaviorSubject<string>;
  private textAreaVal: string;
  
  constructor(props: any) {
    super(props);
    this.state = {
      loading: true
    };

    this.myself = new Person("Vadym", 29); 








    const loadData$ = ApiService.getTestRx()
    .subscribe(
      data => {
        console.log("loadData is: ", data);
      },
      error => {
        console.log("Sorry! An error occured");
        console.log(error);
      }
    );











    this.seachSubject$ = new BehaviorSubject("");

    const search$ = this.seachSubject$
    .pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap( search => {
        this.setLoading(true);
        return ApiService.getSingleData(search)
      })
    )
    .subscribe(
      result => {
          console.log("result is: ", result);
          this.setLoading(false);
        },
      (error: NewError) => {
          console.log("An error occured! Description below:");
          console.log(error);
        }
    );   
  }

  

  public handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.seachSubject$.next(event.currentTarget.value);
  }

  public componentDidMount = () => {
    // const fromInputEvent = fromEvent(document.querySelector("#txtInput"), 'keyup')
    // .pipe(
    //   map (( event: any) => event.target.value),
    //   debounceTime(500),
    //   switchMap( search => {
    //         this.setLoading(true);
    //         return ApiService.getSingleData(search)
    //       })
    // )
    
    // const input$ = fromInputEvent
    // .subscribe(event => {
    //   this.setLoading(false);
    //   console.log(event);
    // });
  }

  public handleClick = () => {
    console.log("output");
  }

  public handleTextAreaChange = (e: any) => {
    this.textAreaVal = e.target.value;
  }
  
  public handleXMLParseClick = () => {
    // console.log("parsing", this.textAreaVal);
    const result1 = convert.xml2json(this.textAreaVal, {compact: true, spaces: 4});
    console.log(JSON.parse(result1));
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <br/>
        <Input 
          id="txtInput" 
          loading={this.state.loading} 
          placeholder='Search...' 
          onChange={this.handleChange} 
          // disabled={this.state.loading} 
          icon='search'/>
        <br/><br/>
        <Button onClick={this.handleClick}>Click Here</Button>
        <p>You are { Strength[this.myself.getStrenth()] }</p>


        <Form>
          <TextArea rows={20} placeholder='Paste you XML here' onChange={this.handleTextAreaChange} />
          <Button primary={true} onClick={this.handleXMLParseClick}>Parse to JSON</Button>
        </Form>
      </div>
    );
  }


  private setLoading = (val: boolean) => {
    this.setState({
      loading: val
    });
  }

}

export default App;
