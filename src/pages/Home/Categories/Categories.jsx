import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import css from "./Categories.module.scss";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import { carouselsSettings } from "../../../utils";

const Categories = () => {
  const { t } = useTranslation();

  return (
    <SectionAnimationWrapper>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className={css.heading}>
            {t("home.categories_heading_first_line")} <br />
            {t("home.categories_heading_second_line")}
          </h2>

          <Slider {...carouselsSettings.categoriesSectionSettings}>
            <div className={css.item}>
              <Link to="/courses/media">
                <div className={css.color_1}>
                  <div className={css.icon}>
                    <i className="kipso-icon-desktop"></i>
                  </div>
                  <h3 className={css.title}>
                    {t("home.categories_name_media")}
                  </h3>
                </div>
              </Link>
            </div>

            <div className={css.item}>
              <Link to="/courses/programming">
                <div className={css.color_2}>
                  <div className={css.icon}>
                    <i className="kipso-icon-web-programming"></i>
                  </div>
                  <h3 className={css.title}>
                    {t("home.categories_name_programming")}
                  </h3>
                </div>
              </Link>
            </div>

            <div className={css.item}>
              <Link to="/courses/autodesk">
                <div className={css.color_3}>
                  <div className={css.icon}>
                    <i className="kipso-icon-music-player"></i>
                  </div>
                  <h3 className={css.title}>
                    {t("home.categories_name_autodesk")}
                  </h3>
                </div>
              </Link>
            </div>

            <div className={css.item}>
              <Link to="/courses/languages">
                <div className={css.color_4}>
                  <div className={css.icon}>
                    <i className="kipso-icon-camera"></i>
                  </div>
                  <h3 className={css.title}>
                    {t("home.categories_name_languages")}
                  </h3>
                </div>
              </Link>
            </div>

            <div className={css.item}>
              <Link to="/courses/libyan">
                <div className={css.color_5}>
                  <div className={css.icon}>
                    <i className="kipso-icon-targeting"></i>
                  </div>
                  <h3 className={css.title}>
                    {t("home.categories_name_libyan")}
                  </h3>
                </div>
              </Link>
            </div>

            <div className={css.item}>
              <Link to="/courses/tunisian">
                <div className={css.color_6}>
                  <div className={css.icon}>
                    <i className="kipso-icon-health"></i>
                  </div>
                  <h3 className={css.title}>
                    {t("home.categories_name_tunisian")}
                  </h3>
                </div>
              </Link>
            </div>
          </Slider>
          <Link to="/categories" className={css.button}>
            {t("home.categories_browse_all")}
          </Link>
        </div>
      </section>
    </SectionAnimationWrapper>
  );
};

export default Categories;
