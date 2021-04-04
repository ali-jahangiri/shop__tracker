import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { navigationSetter } from "../Store/slices/uiSlice";

// icons

import { RiHomeLine } from "react-icons/ri";
import { RiStoreLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiCalendar } from "react-icons/fi";

const Navbar = ({ isActive }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const clickHandler = (path) => {
    history.push(path);
    dispatch(navigationSetter(false));
  };
  // TODO make icons inside Link component
  return (
    <div
      className={`navigation__navbar ${
        isActive ? "navigation__navbar--active" : ""
      }`}
    >
      <RiHomeLine onClick={() => clickHandler("")} />
      <RiStoreLine onClick={() => clickHandler("/product")} />
      <HiOutlineShoppingCart
        style={{ fill: "none", stroke: "white" }}
        onClick={() => clickHandler("/new-factor")}
      />
      <FiCalendar
        style={{ fill: "none", stroke: "white" }}
        onClick={() => clickHandler("/schedule")}
      />
    </div>
  );
};

export default Navbar;
