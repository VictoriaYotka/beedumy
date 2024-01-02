import { NavLink } from "react-router-dom";
import css from "./MobileApp.module.scss";
import { useTranslation } from "react-i18next";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const MobileApp = () => {
  const { t } = useTranslation();

  return (
    <SectionAnimationWrapper>
      <section className={css.section}>
        <div className={css.container}>
          <div className={css.video_group_wrapper}>
            <div className={css.video_wrapper}>
              <iframe
                className={css.video}
                title="mobile app video demonstration"
                src="https://www.youtube.com/embed/JfJYHfrOGgQ"
                loading="lazy"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
            <p className={css.video_descr}>
              {t("home.mobile_app_video_descr")}
              <span className={css.descr_accent}>
                {t("home.mobile_app_video_descr_phones")}
              </span>
              {t("home.mobile_app_video_descr_and")}
              <span className={css.descr_accent}>
                {t("home.mobile_app_video_descr_tablets")}
              </span>
            </p>
          </div>
          <div className={css.info_wrapper}>
            <h2 className={css.heading}>{t("home.mobile_app_header")}</h2>
            <p className={css.descr}>{t("home.mobile_app_descr")}</p>
            <NavLink className={css.button}>
              {t("home.mobile_app_button")}
            </NavLink>
          </div>
        </div>
      </section>
    </SectionAnimationWrapper>
  );
};

export default MobileApp;
