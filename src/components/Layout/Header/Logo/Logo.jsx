import { NavLink } from "react-router-dom";
import css from "./Logo.module.scss";

const Logo = () => {
  return (
    <NavLink to="/" className={css.nav_link}>
      LOGO
    </NavLink>
  );
};

export default Logo;
