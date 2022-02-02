import React, { Component } from "react";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import Section from "./Components/Section/Section.jsx";

class App extends Component {
  state = {
    good: 2,
    neutral: 3,
    bad: 1,
  };

  plus = (event) => {
    console.log(event);
    // this.setState((prevState) => ({ event: prevState.event + 1 }));
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
