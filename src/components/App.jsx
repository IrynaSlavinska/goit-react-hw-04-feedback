import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import { FeedbackContainer, FeedbackTitle } from 'components/Feedback.styled';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChange = option => {
    switch (option) {
      case 'good':
        setGood(previous => previous + 1);
        break;

      case 'neutral':
        setNeutral(previous => previous + 1);
        break;

      case 'bad':
        setBad(previous => previous + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  return (
    <FeedbackContainer>
      <FeedbackTitle>Please leave feedback</FeedbackTitle>

      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleChange}
      />

      <FeedbackTitle>Statistics</FeedbackTitle>

      {countPositiveFeedbackPercentage() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </FeedbackContainer>
  );
}

export default App;
