import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Search from './SearchComponent.js';
import Header from './Header.js'

class App extends Component {
constructor(){
  super();
  axios({
    method: 'get',
    url: 'http://www.omdbapi.com/?i=tt3896198&apikey=88f96886',
    responseType: 'json'
  })
  .then(function (response){
    console.log(response);
  });
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a className="App-link"></a>
          <Header headerProp = "IMDB Search"/>
          <Search/>
        </header>
      </div>
    );
  }
}

export default App;
