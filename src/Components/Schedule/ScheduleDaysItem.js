import { RiMoreLine } from "react-icons/ri";

import WorkbarInsideOneDay from "./workbarInsideOneDay";
import Workbar from "./Workbar";

import persian from "persian-date";
import { useHistory } from "react-router";

const ScheduleDaysItem = ({ dayNumber, isToday, workTime }) => {
  const history = useHistory();

  const workOnlyInsideThisDay = workTime.filter(({ date }) =>
    [date.from.day, date.to.day].every((el) => el === dayNumber)
  );

  // NOTE filtering base on different day if is the work is inside this day (dayNumber)
  const workOnTwoDay = workTime.filter(
    ({ date }) =>
      date.from.day !== date.to.day &&
      [date.from.day, date.to.day].some((el) => el === dayNumber)
  );

  const isNextDayWork = workTime.filter(({ date }) => {
    return date.to.day >= dayNumber;
  });

  const betweenDays = workTime.filter(({ date }) => {
    return (
      date.from.day < dayNumber &&
      date.to.day > dayNumber &&
      new persian([1400, 1, dayNumber]).day() === 1 &&
      dayNumber + 6 < date.to.day
    );
  });

  const forwardTodayHandler = () => {
    history.push(`/schedule/${dayNumber}`);
  };

  return (
    <div
      className={`schedule__day__item ${
        isToday ? "schedule__day__item--today" : ""
      }`}
    >
      <span
        onClick={forwardTodayHandler}
        className="schedule__day__item__dayNumber"
      >
        {dayNumber}
      </span>
      {workOnTwoDay.slice(0, 3).map((el, i) => (
        <Workbar currentDayNumber={dayNumber} index={i} key={i} {...el} />
      ))}
      {betweenDays.map((el, i) => (
        <Workbar
          isBetween
          currentDayNumber={dayNumber}
          index={i}
          key={i}
          {...el}
        />
      ))}
      {workOnlyInsideThisDay.slice(0, 3).map((el, i) => (
        <WorkbarInsideOneDay key={i} index={i} {...el} />
      ))}
      {workOnTwoDay.length >= 4 && (
        <div className="workbar--hasMore">
          <RiMoreLine />
        </div>
      )}
      {workOnlyInsideThisDay.length >= 3 && <RiMoreLine />}
    </div>
  );
};

export default ScheduleDaysItem;
