import React, { Component } from "react";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import Section from "./Components/Section/Section.jsx";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  plus = (key) => {
    // console.log(event);
    this.setState((prevState) => ({
      [key]: prevState[key] + 1,
    }));
  };
  render() {
    return (
      <>
        <Section />

        <FeedbackOptions options={this.state} onLeaveFeedback={this.plus} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </>
    );
  }
}
export default App;
