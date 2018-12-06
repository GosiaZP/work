import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    letter: "",
    printletter: []
  }
  }
  change = (event) =>{
    this.setState({
      letter: event.target.value
    })
  }
  click = () =>{
    this.setState({
      printletter: this.state.printletter.push(this.state.letter),
      letter: ""
    })
    console.log(this.state.printletter)
  }
  render() {
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.letter}
          onChange={this.change}

        />
        <button onClick={this.click}>Click</button>
        <h1>{this.state.printletter}</h1>
      </div>
    );
  }

}

export default App;
