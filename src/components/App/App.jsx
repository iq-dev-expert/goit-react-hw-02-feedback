import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback() {
    let total = 0;

    for (const st in this.state) {
      total += this.state[st];
    }
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;

    const positiveCount = (good * 100) / this.countTotalFeedback();
    return Math.round(positiveCount);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onButtonClick}
          />
        </Section>

        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
