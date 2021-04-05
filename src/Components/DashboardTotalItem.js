import separateBy3 from "../utils/separateBy3";

const DashboardTotalItem = ({ title, value = 0 }) => {
  return (
    <div className="dashboard__total">
      <div className="dashboard__total__value">
        <span>ریال </span>
        <p>{separateBy3(value)}</p>
      </div>
      <div className="dashboard__total__title">{title}</div>
    </div>
  );
};

export default DashboardTotalItem;
