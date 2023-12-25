import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import css from "./Categories.module.scss";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const Categories = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 923,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SectionAnimationWrapper>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className={css.heading}>{t("home.categories_heading")}</h2>

          <Slider {...settings}>
            <div className={css.item}>
              <Link href="#">
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
              <Link href="#">
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
              <Link href="#">
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
              <Link href="#">
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
              <Link href="#">
                <div className={css.color_5}>
                  <div className={css.icon}>
                    <i className="kipso-icon-targeting"></i>
                  </div>
                  <h3 className={css.title}>
                    {t("home.categories_name_libyan_curriculum")}
                  </h3>
                </div>
              </Link>
            </div>

            <div className={css.item}>
              <Link href="#">
                <div className={css.color_6}>
                  <div className={css.icon}>
                    <i className="kipso-icon-health"></i>
                  </div>
                  <h3 className={css.title}>
                    {t("home.categories_name_tunisian_curriculum")}
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
