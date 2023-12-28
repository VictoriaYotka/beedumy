import { NavLink } from "react-router-dom";
import css from "./FooterLists.module.scss";
import { useTranslation } from "react-i18next";

const FooterLists = () => {
  const { t } = useTranslation();

  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink>{t("sharedLayout.browse_content")} </NavLink>
        </li>
        <li className={css.item}>
          <NavLink>{t("sharedLayout.terms_and_conditions")}</NavLink>
        </li>
        <li className={css.item}>
          <NavLink>{t("sharedLayout.privacy_policy")}</NavLink>
        </li>
      </ul>

      <ul className={css.list}>
        <li className={css.item}>
          <NavLink>{t("sharedLayout.help")}</NavLink>
        </li>
        <li className={css.item}>
          <NavLink>{t("sharedLayout.contact_us")}</NavLink>
        </li>
        <li className={css.item}>
          <NavLink>{t("sharedLayout.register_for_free")}</NavLink>
        </li>
      </ul>
    </>
  );
};

export default FooterLists;
