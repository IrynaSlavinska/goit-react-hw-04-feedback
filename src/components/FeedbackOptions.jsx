import { ButtonContainer, FeedbackButton } from 'components/Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonContainer>
      {options.map(option => {
        return (
          <FeedbackButton
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackButton>
        );
      })}
    </ButtonContainer>
  );
};

export default FeedbackOptions;
