import EventShow from './EventShow';
import classNames from './EventList.module.css';

const EventList = ({ events }) => {
  return (
    <ul className={classNames.list}>
      {events.map((event) => (
        <EventShow key={event.id} {...event} />
      ))}
    </ul>
  );
};

export default EventList;
