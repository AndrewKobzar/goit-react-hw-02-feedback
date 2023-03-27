import Notification from './Notification';
import s from './style.module.css';

export default function Statistics({
  total,
  bad,
  good,
  neutral,
  positivePercentage,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  if (total === 0) {
    return <Notification message="There is no feedback" />;
  } else {
    return (
      <>
        <h2 className={s.title}>Statistics</h2>
        <div className={s.textList}>
          {' '}
          <p className={s.text}>
            Good: <span>{good}</span>
          </p>
          <p className={s.text}>
            Neutral: <span>{neutral}</span>
          </p>
          <p className={s.text}>
            Bad: <span>{bad}</span>
          </p>
          <p className={s.text}>
            Total:{' '}
            <span>{(total = countTotalFeedback(good, neutral, bad))}</span>
          </p>
          <p className={s.text}>
            Positive feedback:
            <span>
              {
                (positivePercentage = countPositiveFeedbackPercentage(
                  good,
                  total
                ))
              }
              %
            </span>
          </p>
        </div>
      </>
    );
  }
}
