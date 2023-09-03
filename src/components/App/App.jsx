import React, { Component } from 'react';
import css from './App.module.css';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
// import { Section } from 'components/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onChangeStats = event => {
    const { name } = event.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  isVisible = this.good || this.neutral || this.bad ? true : false;

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((good / total) * 100);
  };

  render() {

    const { good, neutral, bad } = this.state;
    const isVisible = good || neutral || bad ? true : false;
        const total = this.countTotalFeedback(good, neutral, bad);
        const positivePercentage = this.countPositiveFeedbackPercentage(
          good,
          total
        );

    const  feedbackOptions = (
       <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onChangeStats}
        />);

    const statistics = (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    );

    return (
      <div className={css.container}>
        <Section
          title={'Please leave feedback'}
          child={feedbackOptions}
        ></Section>
        {isVisible ? (
          <Section title={'Statistics'} child={statistics}></Section>
        ) : (
          <Notification massage={'There is no feedback'} />
        )}

      </div>
    );
  }
}

export default App;
