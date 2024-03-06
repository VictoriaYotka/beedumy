import { NavLink } from "react-router-dom";
import css from "./NavListBurger.module.scss";
import { useTranslation } from "react-i18next";

const NavListBurger = () => {
  const { t } = useTranslation();

  return (
    <ul className={css.nav_list}>
      <li>
        <NavLink to="/" className={css.nav_link}>
          {t("sharedLayout.homepage")}
        </NavLink>
      </li>
      <li>
        <NavLink to="/categories" className={css.nav_link}>
          {t("sharedLayout.content")}
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/about" className={css.nav_link}>
          {t("sharedLayout.about_us")}
        </NavLink>
      </li> */}
    </ul>
  );
};

export default NavListBurger;
