import Link from 'next/link';
import classNames from './ButtonOrAnchor.module.css';

const ButtonOrAnchor = ({ link, children, onClick }) => {
  if (link) {
    return (
      <Link href={link} className={classNames.buttonOrAnchor}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classNames.buttonOrAnchor}>
      {children}
    </button>
  );
};

export default ButtonOrAnchor;
