import Link from 'next/link';
import classNames from './Anchor.module.css';

const Anchor = ({ link, children }) => {
  return (
    <Link href={link} className={classNames.anchor}>
      {children}
    </Link>
  );
};

export default Anchor;
