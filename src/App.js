import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
  	super();

  	this.state={
  		number:0
  	};
  	this.increment=this.increment.bind(this);
  }
  render() {
    return (
      <div>
        <span className="value">{this.state.number}</span>
        <button id="inc" onClick={this.increment}>Incrementa</button>
      </div>
    );
  }

  increment(){
  	this.setState({
  		number:this.state.number+=1
  	});
  }
}

export default App;
