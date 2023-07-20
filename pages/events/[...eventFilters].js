import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';

const FilteredEventsPage = () => {
  const router = useRouter();
  const [year, month] = router.query.eventFilters;
  const yearNum = +year;
  const monthNum = +month;

  if (
    isNaN(yearNum) ||
    isNaN(monthNum) ||
    yearNum > 2023 ||
    yearNum < 2022 ||
    monthNum < 1 ||
    monthNum > 12
  ) {
    return <p className="center">Invalid filter. Please adjust your values!</p>;
  }

  const dateFilters = { year: yearNum, month: monthNum };
  const filteredEvents = getFilteredEvents(dateFilters);

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className="center">No events found, please try another filter</p>;
  }

  return <EventList events={filteredEvents} />;
};

export default FilteredEventsPage;
