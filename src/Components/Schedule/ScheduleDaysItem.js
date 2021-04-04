import { RiMoreLine } from "react-icons/ri";

import WorkbarInsideOneDay from "./workbarInsideOneDay";
import Workbar from "./Workbar";
import { useState } from "react";

import persian from "persian-date";

const ScheduleDaysItem = ({ dayNumber, isToday, workTime }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

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

  const clickHandler = () => {
    setIsTooltipOpen(!isTooltipOpen);
  };
  return (
    <div
      className={`schedule__day__item ${
        isToday ? "schedule__day__item--today" : ""
      }`}
    >
      <span className="schedule__day__item__dayNumber">{dayNumber}</span>
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
        <div onClick={clickHandler} className="workbar--hasMore">
          <RiMoreLine />
        </div>
      )}
      {workOnlyInsideThisDay.length >= 3 && <RiMoreLine />}
      {isTooltipOpen && (
        <div className="schedule__day__item__tooltip">
          Ratione veritatis exercitationem ex incidunt voluptatem hic eaque
          ullam. Repudiandae omnis earum cumque hic. A ea non expedita qui porro
        </div>
      )}
    </div>
  );
};

export default ScheduleDaysItem;
