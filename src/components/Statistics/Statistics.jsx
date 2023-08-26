import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <section>
      <p>
        Good: <span className={css.statsValue}>{good}</span>
      </p>
      <p>
        Neutral: <span className={css.statsValue}>{neutral}</span>
      </p>
      <p>
        Bad: <span className={css.statsValue}>{bad}</span>
      </p>
      <p>
        Total: <span className={css.statsValue}>{total}</span>
      </p>
      <p>
        Positive feedback:{' '}
        <span className={css.statsValue}>{positivePercentage}%</span>
      </p>
    </section>
  );
};
