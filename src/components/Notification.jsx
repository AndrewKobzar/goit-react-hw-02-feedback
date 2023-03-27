import s from './style.module.css';

const Notification = ({ message }) => {
  return <h2 className={s.title}>{message}</h2>;
};

export default Notification;
