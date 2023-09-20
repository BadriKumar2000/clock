import { Component } from "react";
import "./style.css";

class Counter extends Component {
  state = {
    count: 0,
  };

  onIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  onDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  onReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="counter-container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div className="button-container">
          <button onClick={this.onIncrement}>Increase</button>
          <button onClick={this.onReset}>Reset</button>
          <button onClick={this.onDecrement}>Decrease</button>
        </div>
      </div>
    );
  }
}

export default Counter;
