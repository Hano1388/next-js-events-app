import Link from 'next/link';
import classNames from './MainMenu.module.css';

const MainMenu = () => {
  return (
    <header className={classNames.header}>
      <div className={classNames.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classNames.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainMenu;
