import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import css from "./NavList.module.scss";
import { useEffect } from "react";

const NavList = ({ isLargeScreen }) => {
  const { t, i18n } = useTranslation();

  return (
    <ul className={css.nav_list}>
      <li>
        <NavLink to="/categories" className={css.nav_link}>
          {t("sharedLayout.content")}
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={css.nav_link}>
          {t("sharedLayout.aboutUs")}
        </NavLink>
      </li>
    </ul>
  );
};

export default NavList;
