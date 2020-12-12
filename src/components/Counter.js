import React from 'react';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value:0
    };
  }

  handleClick1() {
    this.setState({
      value:this.state.value + 1
    });
  }

  handleClick2() {
    this.setState({
      value:this.state.value - 1
    });
  }

  render() {

    if(this.state.value > 0) {
      var value = this.state.value + 1
    } else if(this.state.value < 0) {
      this.state.value = 0
    }
    
    return (
      <div>
        <h1>Counter</h1>
        <p>{this.state.value}</p>
        <button onClick={this.handleClick1.bind(this)}>▲</button>
        <button onClick={this.handleClick2.bind(this)}>▼</button>
      </div>
    )
  };
}

export default Counter;