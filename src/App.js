import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        first: "Michael",
        last: "Cruz",
      },
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name.first} {this.state.name.last}
          </p>
          <button
            onClick={() => {
              this.setState({
                name: {
                  first: "Derpus",
                  last: "Gurkus",
                },
              });
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
