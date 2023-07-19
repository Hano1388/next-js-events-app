import classNames from './EventShow.module.css';
import Anchor from '../ui/Anchor';
import DateIcon from '../icons/Date';
import AddressIcon from '../icons/Address';
import ArrowRightIcon from '../icons/RightArrow';

const EventShow = ({ id, title, location, date, image }) => {
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
              <DateIcon />
              <time>{humanReadableDate}</time>
            </div>
            <div className={classNames.address}>
              <AddressIcon />
              <address>{location}</address>
            </div>
          </div>
        </div>
        <div className={classNames.actions}>
          <Anchor link={exploreLink}>
            <span>Explore Event</span>
            <span className={classNames.icon}>
              <ArrowRightIcon />
            </span>
          </Anchor>
        </div>
      </div>
    </li>
  );
};

export default EventShow;
