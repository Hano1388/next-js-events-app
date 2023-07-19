import EventList from '../../components/events/EventList';
import { getAllEvents } from '../../dummy-data';

const EventsPage = () => {
  const events = getAllEvents();
  return <EventList events={events} />;
};

export default EventsPage;
