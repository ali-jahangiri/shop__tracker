import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import NavIcon from "../Components/NavIcon";

const WithNavigation = ({ children }) => {
  const isNavActive = useSelector((state) => state.ui.isNavigationActive);
  return (
    <div
      className={`navigation__container ${
        isNavActive ? "navigation__container--active" : ""
      }`}
    >
      <Navbar isActive={isNavActive} />
      <NavIcon isActive={isNavActive} />

      {children}
    </div>
  );
};

export default WithNavigation;
