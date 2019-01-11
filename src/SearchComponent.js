import React, { Component } from 'react';
import axios from 'axios';

let userInput
let data;

class SearchComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { movies: "default" };

        this.update = () => {
            userInput = document.getElementById("userInput").value;
            console.log(userInput);

            axios({
                method: 'get',
                url: 'http://www.omdbapi.com/?s=' + userInput + '&apikey=88f96886',
                responseType: 'json'
            })
                .then(response => this.setState({
                    last: this.state.last,
                    movies: response.data.Search
                }));
        }
    }

    render() {
        return (
            <div>
                <label>
                    <br />
                    <input id="userInput" type="text" placeholder="Enter Movie Name" />
                    <br /><button type="button" onClick={this.update}>Search</button>
                </label>
                <p>{this.state.result}</p>
                <p>{this.state.movies[0].Title}</p>
                <p>{this.state.movies[0].Year}</p>
                <img src={this.state.movies[0].Poster}/>
            </div>
        )
    }
}
export default SearchComponent;