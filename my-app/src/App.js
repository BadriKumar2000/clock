import { Component } from "react";
import Counter from "./components/counter";
import Welcome from "./components/Welcome";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Welcome />
      </div>
    );
  }
}

export default App;
