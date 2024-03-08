import { NavLink } from "react-router-dom";
import css from "./Logo.module.scss";
import beedumy_logo from "../../../../assets/images/beedumy_logo.webp";

const Logo = () => {
  return (
    <NavLink to="/" className={css.logo}>
      <img src={beedumy_logo} alt="Beedumy" />
    </NavLink>
  );
};

export default Logo;
