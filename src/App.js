import React, { Component } from 'react';
import './App.css';
import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";

class App extends Component {
  render(){
    return(
      <div className="App">
        {/* <Login/> */}
        <Main/>
      </div>
    );
  }
}


export default App;
