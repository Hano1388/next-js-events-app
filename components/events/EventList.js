import EventDetails from './EventDetails';

const EventList = ({ events }) => {
  return (
    <ul>
      {events.map((event) => (
        <EventDetails key={event.id} {...event} />
      ))}
    </ul>
  );
};

export default EventList;
