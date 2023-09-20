import { Component } from "react";
import "./style.css";

class Welcome extends Component {
  state = {
    isLogin: true,
  };

  onChangeStatus = () => {
    console.log("onClick event is triggered");
    this.setState((prevState) => ({ isLogin: !prevState.isLogin }));
  };
  render() {
    const { isLogin } = this.state;
    console.log(isLogin);
    return (
      <div className="main-container">
        <div className="card-container">
          <h1>Hello User!</h1>
          <div>
            {isLogin ? (
              <button onClick={this.onChangeStatus}>LogOut</button>
            ) : (
              <button onClick={this.onChangeStatus}>LogIn</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
