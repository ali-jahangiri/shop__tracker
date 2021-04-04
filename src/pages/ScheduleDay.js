import { useSelector } from "react-redux";

import persian from "persian-date";

import PageHeader from "../Components/PageHeader";
import ScheduleDayItem from "../Components/Schedule/ScheduleDayItem";
import EmptyProduct from "../Components/EmptyProduct";

const ScheduleDay = ({
  match: {
    params: { day },
  },
}) => {
  // NOTE : day should be a NUMBER
  const now = new persian([1400, 1, +day]);

  // TIP filtering base on start / end day of the work . or a work between to date
  const relatedWorkOfThisDay = useSelector((state) =>
    state.factorHistory.filter(
      ({ date: { from, to } }) => to.day >= day && from.day <= day
    )
  );

  return (
    <div className="container">
      <div className="row">
        <PageHeader
          title="لیست فاکتور ها در تاریخ"
          primaryText={now.toLocale("fa").format("YYYY/MM/DD")}
        />
        <div className="col-md-12">
          {!relatedWorkOfThisDay.length && (
            <EmptyProduct style={{ margin: "3rem 0 " }}>
              <p>فاکتوری در این روز ثبت نشده است</p>
            </EmptyProduct>
          )}
          {relatedWorkOfThisDay?.map((el, i) => (
            <ScheduleDayItem index={++i} key={i} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleDay;
