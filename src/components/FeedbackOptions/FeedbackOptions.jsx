import css from './FeedbackOptions.module.css';
import { capitalize } from 'utils';

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => (
    <button
      type="button"
      className={css.feebbackButton}
      name={option}
      onClick={onLeaveFeedback}
      key={option}
    >
      {capitalize(option, ' ')}
    </button>
  ));
