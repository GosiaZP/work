import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import words from './words/words.js'
import DisplayWord from './components/DisplayWord'
import Input from './components/Input/Input'
import wrongletters from './components/wrongletters'

class App extends Component {
  constructor(){
    super();
    this.state ={
      puzzle: words[Math.floor(Math.random(),words.lenght)],
      guessedLetters: []
    };
  }
  _updateGuessedLetteers(letter){
    let gussedLettersClone = [...this.state.guessedLetters]
    guessedLettersClone.push(letter)
    this.setState({guessedLetters: guessedLettersClone})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Input guessedLetters={this.state.guessedLetters} _updateGuessedLetteers={this._updateGuessedLetteers.bind(this)} /> <br/>
          <DisplayWord word = {this.state.puzzle} gussedLetters={this.state.guessedLetters} />
          <WrongLetters word = {this.state.puzzle} guessedLetters={this.state.guessedLetters}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
