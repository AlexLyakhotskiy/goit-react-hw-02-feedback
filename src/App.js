import React, { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification';
import Container from './components/Container';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  addFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positivePercentage: Math.round((prevState.good / prevState.total) * 100),
    }));
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    const keyNames = Object.keys(this.state).slice(0, 3);

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={keyNames}
            onLeaveFeedback={this.addFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
