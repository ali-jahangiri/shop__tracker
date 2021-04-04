import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { navigationSetter } from "../Store/slices/uiSlice";

import bodyOverflowHandler from "../utils/bodyOverflowHandler";
import selfClearTimeout from "../utils/selfClearTimeout";

const NavIcon = ({ isActive }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    // bodyOverflowHandler(
    //   selfClearTimeout(() => {
    //     if (isActive) return true;
    //     return false;
    //   }, 1000)
    // );
    dispatch(navigationSetter(!isActive));
    if (isActive)
      selfClearTimeout(() => {
        bodyOverflowHandler(false, "overflowX");
      }, 420);
    else {
      console.log("is false");
      bodyOverflowHandler(true, "overflowX");
    }
    // else
    //   selfClearTimeout(() => {
    //     bodyOverflowHandler(false, "overflowX");
    //   }, 800);
  };
  return (
    <HiOutlineMenuAlt2
      style={{ left: `${isActive ? "15%" : "5%"}` }}
      onClick={clickHandler}
      className="navigation__svg"
    />
  );
};

export default NavIcon;
