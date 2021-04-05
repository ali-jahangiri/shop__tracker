import { useSelector } from "react-redux";

import ScheduleDayItem from "../Components/Schedule/ScheduleDayItem";

const DashboardLastFactor = () => {
  const sortedFactor = useSelector((state) =>
    state.factorHistory.sort((a, b) => b.createTime - a.createTime)
  );
  return sortedFactor
    .slice(0, 5)
    .map((el, i) => <ScheduleDayItem key={i} {...el} />);
};

export default DashboardLastFactor;
