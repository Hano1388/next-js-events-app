import classNames from './EventLogisticItem.module.css';

function LogisticsItem({ icon: Icon, children }) {
  return (
    <li className={classNames.item}>
      <span className={classNames.icon}>
        <Icon />
      </span>
      <span className={classNames.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
