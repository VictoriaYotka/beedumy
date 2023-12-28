import { NavLink } from "react-router-dom";
import css from "./About.module.scss";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className={css.about_wrapper}>
      <h5 className={css.about_heading}>{t("sharedLayout.about_heading")}</h5>

      <p className={css.about_descr}>{t("sharedLayout.about_description")}</p>

      <NavLink to="/contact" className={css.follow_more_button}>
        {t("sharedLayout.connect")}
      </NavLink>
      <button className={css.connect_button}>
        {t("sharedLayout.learn_more")}
      </button>
    </div>
  );
};

export default About;
