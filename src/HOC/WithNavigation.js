import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import NavIcon from "../Components/NavIcon";

const WithNavigation = ({ children }) => {
  const isNavActive = useSelector((state) => state.ui.isNavigationActive);
  const ref = useRef();

  useEffect(() => {
    if (ref.current && isNavActive) {
      ref.current.style.overflowX = "auto";
    } else {
      ref.current.style.overflowX = "hidden";
    }
  }, []);
  return (
    <div
      className={`navigation__container ${
        isNavActive ? "navigation__container--active" : ""
      }`}
    >
      <Navbar isActive={isNavActive} />
      <NavIcon isActive={isNavActive} />

      <div ref={ref}>{children}</div>
    </div>
  );
};

export default WithNavigation;
