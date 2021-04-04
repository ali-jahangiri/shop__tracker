import persian from "persian-date";
import { useSelector } from "react-redux";
import ScheduleDaysItem from "./ScheduleDaysItem";

// utils
import makeLocalRef from "../../utils/makeLocalRef";

// because these variables don't need to change base on component re rendering
const now = new persian();
const ScheduleDays = ({ currentMonth, nowDatOfMonth }) => {
  const allDays = new Array(now.add("month", currentMonth).daysInMonth()).fill(
    1
  );

  // algorithm is filtering task base on month
  const allWorkTimes = useSelector(({ factorHistory }) =>
    factorHistory
      .filter((el) => el.date.from.month === ++makeLocalRef(currentMonth).ref)
      .map((el) => ({ date: el.date, id: el.id, color: el.hashColor }))
  );
  return allDays.map((_, i) => (
    <div className="schedule__day" key={i}>
      <ScheduleDaysItem
        workTime={allWorkTimes}
        isToday={++makeLocalRef(i).ref === nowDatOfMonth && !currentMonth}
        dayNumber={++makeLocalRef(i).ref}
      />
    </div>
  ));
};

export default ScheduleDays;
