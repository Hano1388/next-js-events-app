import DateIcon from '../../icons/Date';
import AddressIcon from '../../icons/Address';
import EventLogisticsItem from './EventLogisticItem';
import classNames from './EventLogistics.module.css';

function EventLogistics({ title, date, location, image }) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classNames.logistics}>
      <div className={classNames.image}>
        <img src={`/${image}`} alt={title} />
      </div>
      <ul className={classNames.list}>
        <EventLogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </EventLogisticsItem>
        <EventLogisticsItem icon={AddressIcon}>
          <address>{location}</address>
        </EventLogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
