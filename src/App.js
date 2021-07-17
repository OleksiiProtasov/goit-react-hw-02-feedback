import { Component } from "react";
import "./App.css";
import Container from "./Components/Container";

import Stats from "./Components/stats";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Container>
        <h1>Please leave feedback</h1>

        <Stats
          stats={this.state}
          total={this.getTotal()}
          getPositive={this.getPositivePercentage()}
        />
      </Container>
    );
  }
}

export default App;
