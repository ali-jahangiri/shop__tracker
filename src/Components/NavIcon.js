import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { navigationSetter } from "../Store/slices/uiSlice";

import selfClearTimeout from "../utils/selfClearTimeout";

const NavIcon = ({ isActive }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(navigationSetter(!isActive));
    if (isActive) {
      selfClearTimeout(() => {
        document.body.style.overflowX = "auto";
      }, 500);
    } else {
      document.body.style.overflowX = "hidden";
    }
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
