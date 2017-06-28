import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses=[
      {name:"Complete ios10 dev course",price:199},
      {name:"Complete css dev course", price:299},
      {name:"Complete angularjs dev course", price:199},
      {name:"Complete reactjs dev course" ,price:399}
      ];


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course purchase page...</h2>
        </div>
        <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;
