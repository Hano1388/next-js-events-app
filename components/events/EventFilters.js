import { useRouter } from 'next/router';

import ButtonOrAnchor from '../ui/ButtonOrAnchor';
import classNames from './EventFilters.module.css';
import { useRef } from 'react';

const EventFilters = () => {
  const router = useRouter();
  const monthRef = useRef();
  const yearRef = useRef();

  const onFindEventsSubmitHandler = (event) => {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const month = formData.get('month');
    // const year = formData.get('year');
    // Or we could use refs
    const month = monthRef.current.value;
    const year = yearRef.current.value;

    router.push(`/events/${year}/${month}`);
  };
  return (
    <form
      className={classNames.eventsFilterForm}
      onSubmit={onFindEventsSubmitHandler}
    >
      <div className={classNames.controls}>
        <div className={classNames.control}>
          <label htmlFor="year">Year</label>
          <select id="year" name="year" ref={yearRef}>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className={classNames.control}>
          <label htmlFor="month">Month</label>
          <select id="month" name="month" ref={monthRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <ButtonOrAnchor>Find Events</ButtonOrAnchor>
    </form>
  );
};

export default EventFilters;
