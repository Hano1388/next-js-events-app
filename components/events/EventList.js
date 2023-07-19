import EventDetails from './EventDetails';
import classNames from './EventList.module.css';

const EventList = ({ events }) => {
  return (
    <ul className={classNames.list}>
      {events.map((event) => (
        <EventDetails key={event.id} {...event} />
      ))}
    </ul>
  );
};

export default EventList;
