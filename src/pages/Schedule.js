import persian from "persian-date";
import { useEffect, useState } from "react";

import bodyOverflowHandler from "../utils/bodyOverflowHandler";
import ScheduleController from "../Components/Schedule/ScheduleController";
import ScheduleDays from "../Components/Schedule/ScheduleDay";

const ScheduleCalender = () => {
  const now = new persian();
  const [currentMonth, setCurrentMonth] = useState(0);
  const nowDayOfWeek = now.local("fa").day();
  const nowDatOfMonth = now.date();
  const startDayOfMonth = Array(
    now.add("month", currentMonth).startOf("month").day() - 1
  ).fill("");

  const namesOfDaysOfWeek = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];

  // handle body overflow
  useEffect(() => {
    bodyOverflowHandler(true, "overflowX");
    return () => bodyOverflowHandler(false);
  }, []);

  return (
    <div className="container-fluid schedule">
      <div className="row">
        <div className="w-100">
          <ScheduleController monthSetter={setCurrentMonth} />
          <div className="schedule__dayOfWeek row">
            {namesOfDaysOfWeek.reverse().map((el, i) => (
              <div key={i} className="schedule__dayOfWeek__item">
                {el}
              </div>
            ))}
          </div>
        </div>
        {startDayOfMonth.map((_, i) => (
          <div key={i} className="schedule__day schedule__day--empty"></div>
        ))}
        <ScheduleDays
          currentMonth={currentMonth}
          nowDatOfMonth={nowDatOfMonth}
        />
      </div>
    </div>
  );
};

export default ScheduleCalender;
