import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0
  };

  handleIncrement = () => {
      this.setState({
        counter: this.state.counter + 1
      })
  }

  render() {
    return (
      <div>
        {this.setBadge()}
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }
}

export default Counter;
