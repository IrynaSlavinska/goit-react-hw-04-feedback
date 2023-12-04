import {
  FeedbackStatisticsList,
  Container,
  FeedbackStatisticsItem,
  FeedbackStat,
} from 'components/Feedback.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Container>
      <FeedbackStatisticsList>
        <FeedbackStatisticsItem>
          <FeedbackStat>
            Good: <span>{good}</span>
          </FeedbackStat>
        </FeedbackStatisticsItem>

        <FeedbackStatisticsItem>
          <FeedbackStat>
            Neutral: <span>{neutral}</span>
          </FeedbackStat>
        </FeedbackStatisticsItem>

        <FeedbackStatisticsItem>
          <FeedbackStat>
            Bad: <span>{bad}</span>
          </FeedbackStat>
        </FeedbackStatisticsItem>
      </FeedbackStatisticsList>

      <FeedbackStat>
        Total: <span> {total}</span>
      </FeedbackStat>

      <FeedbackStat>
        Positive feedback:
        <span> {positivePercentage}%</span>
      </FeedbackStat>
    </Container>
  );
};
export default Statistics;
