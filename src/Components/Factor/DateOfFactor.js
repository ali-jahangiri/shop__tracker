import { Calendar, utils } from "react-modern-calendar-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { setFactorDate } from "../../Store/slices/newFactorSlice";

const DateOfFactor = () => {
  const settledDate = useSelector((state) => state.newFactor.date);
  const dispatch = useDispatch();
  const onChangeHandler = ({ from, to }) =>
    dispatch(setFactorDate({ from, to }));

  return (
    <Calendar
      value={settledDate}
      shouldHighlightWeekends
      locale="fa"
      colorPrimary="#184d47"
      colorPrimaryLight="#d6efc7"
      calendarClassName="calender"
      slideAnimationDuration="0.2s"
      minimumDate={utils("fa").getToday()}
      onChange={onChangeHandler}
    />
  );
};

export default DateOfFactor;
