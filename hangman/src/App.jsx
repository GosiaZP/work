import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const allWords= [
      "dog",
      "cat",
      "developers"
    ];
    const chosenWord = allWords[Math.floor(Math.random()*allWords.lenght)]
  this.state = {
    chosenWord: chosenWord,
    matchedLetters: [],
    notMatchingLetters: [],
    numberguesses: chosenWord.lenght,
    letter: "",
    printletter: []
  }
  }

  displayWord(){
    let output =''
    for (let i=0; i < this.state.chosenWord.lenght; i++){
      let letter = this.state.chosenWord[i]
      if (this.state.matchedLetters.includes(letter)){
        output += $;{letter}
      } else {
        output += '_'
      }
    }
    return output

  }

  _handleSubmit(e){
    e.preventDefault();
    let guessedLetter = this.refs.textInput.value
    if (this.state.chosenWord.includes(guessesLetter)){
      let marchedLettersClone = [...this.state.matchedLetters]
      matchedLettersClone.push(guessedLetter)

      this.setState({
        matchedLetters: matchedLettersClone
      })
    } else{
      let notMatchingLettersClone = [...this.state.notMatchingLetters]
      notMatchingLettersClone.push(guessedLetter)

      this.setState({
        notMatchingLetters: notMatchingLettersClone
      })
    }
    this.refs.textInput.value =''
    if (this.checkWinner()===true){
      alert('You win')
    }
    
  }

  changeLetter  = (event) =>{
    this.setState({
      letter: event.target.value
    })
    console.log(this.setState.letter);

  }
  
  click = () =>{
    this.setState({
      printletter: [...this.state.printletter, this.state.letter],
      letter: ""
    })
    console.log(this.setState.printletter)
  }
  checkWinner(){
    if (this.displayWord().includes('_')){
      return false
    } else {
      return true
    }
  }


  render() {
    console.log(this.state);
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.letter}
          onChange={this.changeLetter}

        />
        <button onClick={this.click}>Click</button>
        <h1>{this.setState.printletter}</h1>
      </div>
    );
  }

}

export default App;
