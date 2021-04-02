import persian from "persian-date";

import makeLocalRef from "../../utils/makeLocalRef";

const Workbar = ({ currentDayNumber, date: { from, to }, color, id }) => {
  const dayOfWeekOfFrom = new persian([1400, 1, currentDayNumber]).day();
  const dayOfWeekOfTo = new persian([1400, 1, to.day]).day();

  const wantStep = to.day - from.day;
  const possibleStep = 7 - dayOfWeekOfFrom;

  const widthChecker = () => {
    if (wantStep > possibleStep) {
      return `${++makeLocalRef(possibleStep).ref}00%`;
    } else return `${wantStep}00%`;
  };
  return from.day === currentDayNumber ? (
    <div
      style={{ width: `${widthChecker()}`, borderColor: `${color}` }}
      className="workbar"
    ></div>
  ) : (
    to.day === currentDayNumber && (
      <div
        style={{ width: `${dayOfWeekOfTo}00%`, borderColor: `${color}` }}
        className="workbar workbar--revers"
      ></div>
    )
  );
};

export default Workbar;
