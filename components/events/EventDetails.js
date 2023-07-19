import Link from 'next/link';
import classNames from './EventDetails.module.css';
import Anchor from '../ui/Anchor';

const EventDetails = ({ id, title, location, date, image }) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const exploreLink = `/events/${id}`;

  return (
    <li className={classNames.event}>
      <img src={'/' + image} alt={title} />
      <div className={classNames.content}>
        <div className={classNames.content}>
          <div className={classNames.summary}>
            <h2>{title}</h2>
            <div className={classNames.date}>
              <time>{humanReadableDate}</time>
            </div>
            <div className={classNames.address}>
              <address>{location}</address>
            </div>
          </div>
        </div>
        <div className={classNames.actions}>
          <Anchor link={exploreLink} text="Explore Event" />
        </div>
      </div>
    </li>
  );
};

export default EventDetails;
