import classNames from './EventSummary.module.css';

const EventSummary = ({ title }) => {
  return (
    <section className={classNames.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;
