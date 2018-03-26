import React, { Component } from 'react';
import Title from "./Components/Title";
import Form from "./Components/Form";
import RiskFactor from "./Components/RiskFactor";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Title/>
        <div>
          <RiskFactor/>
        </div>   
        <Form/>
      </div>
    );
  }
}

export default App;
