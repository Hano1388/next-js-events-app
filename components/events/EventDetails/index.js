import { useRouter } from 'next/router';

import { getEventById } from '../../../dummy-data';
import EventSummary from './EventSummary';
import EventLogistics from './EventLogistics';
import EventContent from './EventContent';

const EventDetails = () => {
  const router = useRouter();
  const {
    query: { eventId },
  } = router;

  const event = getEventById(eventId);

  if (!event) {
    return <p>Event Not Found</p>;
  }

  const { title, description, image, location, date } = event;

  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        location={location}
        image={image}
        title={title}
      />
      <EventContent>{description}</EventContent>
    </>
  );
};

export default EventDetails;
