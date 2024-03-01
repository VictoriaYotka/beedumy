import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import css from "./Categories.module.scss";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import { carouselsSettings } from "../../../utils";

const Categories = ({ direction }) => {
  const { t } = useTranslation();

  const count = 6;

  return (
    <SectionAnimationWrapper>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className={css.heading}>
            {t("home.categories_heading_first_line")} <br />
            {t("home.categories_heading_second_line")}
          </h2>

          <div className={css.carousel_wrapper}>
            <Slider
              {...{
                initialSlide: carouselsSettings.getRandomInt(count),
                rtl: direction === "rtl" ? true : false,
                ...carouselsSettings.categoriesSectionSettings,
              }}
            >
              <div className={css.item}>
                <Link to="/categories/media">
                  <div className={css.color_1}>
                    <div className={css.icon}>
                      <i className="kipso-icon-desktop"></i>
                    </div>
                    <h3 className={css.title}>{t("media")}</h3>
                  </div>
                </Link>
              </div>

              <div className={css.item}>
                <Link to="/categories/programming">
                  <div className={css.color_2}>
                    <div className={css.icon}>
                      <i className="kipso-icon-web-programming"></i>
                    </div>
                    <h3 className={css.title}>{t("programming")}</h3>
                  </div>
                </Link>
              </div>

              <div className={css.item}>
                <Link to="/categories/autodesk">
                  <div className={css.color_3}>
                    <div className={css.icon}>
                      <i className="kipso-icon-music-player"></i>
                    </div>
                    <h3 className={css.title}>{t("autodesk")}</h3>
                  </div>
                </Link>
              </div>

              <div className={css.item}>
                <Link to="/categories/languages">
                  <div className={css.color_4}>
                    <div className={css.icon}>
                      <i className="kipso-icon-camera"></i>
                    </div>
                    <h3 className={css.title}>{t("languages")}</h3>
                  </div>
                </Link>
              </div>

              <div className={css.item}>
                <Link to="/categories/libyan">
                  <div className={css.color_5}>
                    <div className={css.icon}>
                      <i className="kipso-icon-targeting"></i>
                    </div>
                    <h3 className={css.title}>{t("libyan")}</h3>
                  </div>
                </Link>
              </div>

              <div className={css.item}>
                <Link to="/categories/tunisian">
                  <div className={css.color_6}>
                    <div className={css.icon}>
                      <i className="kipso-icon-health"></i>
                    </div>
                    <h3 className={css.title}>{t("tunisian")}</h3>
                  </div>
                </Link>
              </div>
            </Slider>
          </div>
          <Link to="/categories" className={css.button}>
            {t("home.categories_browse_all")}
          </Link>
        </div>
      </section>
    </SectionAnimationWrapper>
  );
};

export default Categories;
