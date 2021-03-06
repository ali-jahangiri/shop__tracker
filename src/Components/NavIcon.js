import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { navigationSetter } from "../Store/slices/uiSlice";

import bodyOverflowHandler from "../utils/bodyOverflowHandler";
import selfClearTimeout from "../utils/selfClearTimeout";

const NavIcon = ({ isActive }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(navigationSetter(!isActive));
    if (isActive)
      selfClearTimeout(() => {
        bodyOverflowHandler(false, "overflowX");
      }, 420);
    else bodyOverflowHandler(true, "overflowX");
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
