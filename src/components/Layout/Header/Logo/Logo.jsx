import { NavLink } from "react-router-dom";
import css from "./Logo.module.scss";

const Logo = () => {
  return (
    <NavLink to="/" className={css.logo}>
      LOGO
    </NavLink>
  );
};

export default Logo;
