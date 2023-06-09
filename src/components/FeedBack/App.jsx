import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = e => {
    const key = e.target.childNodes[0].data;
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback() {
    const { state } = this;

    let total = 0;
    for (const st in state) {
      total += state[st];
    }
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;

    const positiveCount = (good * 100) / this.countTotalFeedback();
    return Math.round(positiveCount);
  }

  render() {
    const {
      state,
      state: { good, neutral, bad },
    } = this;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={this.onButtonClick}
          />
        </Section>

        <Section title="Statistics">
          {!this.countTotalFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
