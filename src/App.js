import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    sum:"",
    answer:"",
    hasError: false
  }

  // buttonClick=(click)=>{
  //   this.setState({
  //     sum: this.state.sum +=click
  //   })
  // }

  inputHandler =(e)=>{
    this.setState({
      sum: e.target.value
    })
  }
  calculationHandler = () =>{
    if (/[a-zA-Z]+/g.test(this.state.sum)){
        this.setState({
          answer: "Syntax Error"
        })
      }else{
    let answer = eval(this.state.sum)
    this.setState({
      answer: answer
    })
  }
}
  render() {
    return (
      <div className="App">
      <h1>My Calculator</h1>
      <form >
        <input 
        type="text"  
        placeholder="Input" 
        onChange= {(e)=>this.inputHandler(e)}  
        >
        </input>
      </form>
      <h4>Your calculation:{this.state.sum}</h4>
      <button onClick={this.calculationHandler}>Calculate</button>
      <h4>{this.state.answer}</h4> 
      </div>
    );
  }
}

export default App;
