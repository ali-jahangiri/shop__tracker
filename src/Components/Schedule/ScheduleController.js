import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { useSelector } from "react-redux";
// TODO responsiveness of calender in some point
const ScheduleController = ({ monthSetter }) => {
  const isNavActive = useSelector((state) => state.ui.isNavigationActive);
  return (
    !isNavActive && (
      <>
        <div
          className="schedule__controller"
          onClick={() => monthSetter((prev) => ++prev)}
        >
          <div className="schedule__controller__overlay"></div>
          <MdNavigateBefore />
        </div>
        <div
          className="schedule__controller"
          onClick={() => monthSetter((prev) => --prev)}
        >
          <div className="schedule__controller__overlay"></div>
          <MdNavigateNext />
        </div>
      </>
    )
  );
};

export default ScheduleController;
