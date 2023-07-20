import EventFilters from '../components/events/EventFilters';
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../dummy-data';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <EventFilters />
      <EventList events={featuredEvents} />
    </>
  );
};

export default HomePage;
