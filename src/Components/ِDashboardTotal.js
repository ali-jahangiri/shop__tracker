import persian from "persian-date";
import { useSelector } from "react-redux";
import DashboardTotalItem from "./DashboardTotalItem";

import makeLocalRef from "../utils/makeLocalRef";

const DashboardTotal = () => {
  const now = new persian();
  const nowMonth = now.month();
  const nowYear = now.year();
  const nowDayOfWeek = now.local("fa").day();

  const startDayOfThisWeek = now
    .subtract("day", --makeLocalRef(nowDayOfWeek).ref)
    .date();
  const endDayOfThisWeek = now.add("day", 7 - nowDayOfWeek).date();

  const factorHistoryBaseOnMonth = useSelector((state) =>
    state.factorHistory
      .filter(
        ({ date: { from, to } }) =>
          `${from.year}/${from.month}` === `${nowYear}/${nowMonth}` ||
          `${to.year}/${to.month}` === `${nowYear}/${nowMonth}`
      )
      .map((el) => [...el.productList][0])
      .reduce((acc, res) => {
        return acc + +res.price * +res.count;
      }, 0)
  );
  const factorHistoryBaseOnYear = useSelector((state) =>
    state.factorHistory
      .filter(
        ({ date: { from, to } }) => from.year === nowYear || to.year === nowYear
      )
      .map((el) => [...el.productList][0])
      .reduce((acc, res) => {
        return acc + +res.price * +res.count;
      }, 0)
  );
  //  filtering base on start and end time of the work if all times are inside this weekend
  const factorHistoryBaseOnWeek = useSelector((state) =>
    state.factorHistory
      .filter(
        ({ date: { from, to } }) =>
          from.day >= startDayOfThisWeek && to.day <= endDayOfThisWeek
      )
      .map((el) => [...el.productList][0])
      .reduce((acc, res) => {
        return acc + +res.price * +res.count;
      }, 0)
  );

  return (
    <>
      <DashboardTotalItem
        value={factorHistoryBaseOnWeek}
        title="مجموع دامد هفته جاری"
      />
      <DashboardTotalItem
        value={factorHistoryBaseOnMonth}
        title="مجموع درامد ماه جاری"
      />
      <DashboardTotalItem
        value={factorHistoryBaseOnYear}
        title="مجموع درامد سال جاری"
      />
    </>
  );
};

export default DashboardTotal;
