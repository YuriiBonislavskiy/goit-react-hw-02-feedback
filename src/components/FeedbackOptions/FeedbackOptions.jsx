import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { capitalize } from 'utils';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      type="button"
      className={css.feebbackButton}
      name={option}
      onClick={onLeaveFeedback}
      key={option}
    >
      {capitalize(option, ' ')}
    </button>
  ));}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired,).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};