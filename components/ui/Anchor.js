import Link from 'next/link';
import classNames from './Anchor.module.css';

const Anchor = ({ link, text }) => {
  return (
    <Link href={link} className={classNames.anchor}>
      {text}
    </Link>
  );
};

export default Anchor;
