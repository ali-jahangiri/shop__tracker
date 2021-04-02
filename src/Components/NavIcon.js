import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { navigationSetter } from "../Store/slices/uiSlice";

const NavIcon = ({ isActive }) => {
  const dispatch = useDispatch();
  const clickHandler = () => dispatch(navigationSetter(!isActive));
  return (
    <HiOutlineMenuAlt2
      style={{ left: `${isActive ? "15%" : "5%"}` }}
      onClick={clickHandler}
      className="navigation__svg"
    />
  );
};

export default NavIcon;
