import { RiMoreLine } from "react-icons/ri";

import WorkbarInsideOneDay from "./workbarInsideOneDay";
import Workbar from "./Workbar";

const ScheduleDaysItem = ({ dayNumber, isToday, workTime }) => {
  const workOnlyInsideThisDay = workTime.filter(({ date }) =>
    [date.from.day, date.to.day].every((el) => el === dayNumber)
  );
  const workOnTwoDay = workTime.filter(
    ({ date }) => date.from.day !== date.to.day
  );
  // TODO can re write filtering 👆
  return (
    <div
      className={`schedule__day__item ${
        isToday ? "schedule__day__item--today" : ""
      }`}
    >
      <span className="schedule__day__item__dayNumber">{dayNumber}</span>
      {workOnTwoDay?.map((el, i) => (
        <Workbar currentDayNumber={dayNumber} key={i} {...el} />
      ))}
      {workOnlyInsideThisDay.slice(0, 3).map((el, i) => (
        <WorkbarInsideOneDay key={i} index={i} {...el} />
      ))}
      {workOnlyInsideThisDay.length >= 3 && <RiMoreLine />}
    </div>
  );
};

export default ScheduleDaysItem;
