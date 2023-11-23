import { NavLink } from "react-router-dom";
import css from "./NavList.module.scss";

const NavList = ({ isLargeScreen }) => {
  return (
    <ul className={css.nav_list}>
      <li>
        <NavLink to="/categories" className={css.nav_link}>
          المحتوى
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={css.nav_link}>
          من نحن؟
        </NavLink>
      </li>
    </ul>
  );
};

export default NavList;
