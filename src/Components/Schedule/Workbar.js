import persian from "persian-date";

import makeLocalRef from "../../utils/makeLocalRef";

const Workbar = ({
  currentDayNumber,
  date: { from, to },
  color,
  id,
  index,
  isBetween,
}) => {
  const dayOfWeekOfFrom = new persian([1400, 1, currentDayNumber]).day();
  const dayOfWeekOfTo = new persian([1400, 1, to.day]).day();

  const wantStep = to.day - from.day;
  const possibleStep = 7 - dayOfWeekOfFrom;

  const widthChecker = () => {
    if (wantStep > possibleStep) {
      return `${++makeLocalRef(possibleStep).ref}00%`;
    } else return `${wantStep}00%`;
  };

  const conditionalRendering = () => {
    if (from.day === currentDayNumber) {
      return (
        <div
          style={{
            width: `${widthChecker()}`,
            borderColor: `${color}`,
            top: `${index * 3}0%`,
          }}
          className="workbar"
        ></div>
      );
    } else if (isBetween) {
      return (
        <div
          style={{
            width: `${possibleStep + 1}00%`,
            borderColor: `${color}`,
            top: `${index * 3}0%`,
          }}
          className="workbar workbar--between"
        ></div>
      );
    } else if (to.day === currentDayNumber) {
      return (
        <div
          style={{
            width: `${dayOfWeekOfTo}00%`,
            borderColor: `${color}`,
            top: `${index * 3}0%`,
          }}
          className="workbar workbar--revers"
        ></div>
      );
    }
  };
  return conditionalRendering();
};

export default Workbar;
