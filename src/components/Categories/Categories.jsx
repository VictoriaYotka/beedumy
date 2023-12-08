import { Link } from "react-router-dom";
import Slider from "react-slick";
import css from "./Categories.module.scss";

const Categories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    swipeToSlide: true,
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 923,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.heading}>هنا تبدأ رحلتك من العِلم إلى العَمل</h2>

        <Slider {...settings}>
          <div>
            <div className={css.item}>
              <Link href="#">
                <div className={css.color_1}>
                  <div className={css.icon}>
                    <i className="kipso-icon-desktop"></i>
                  </div>
                  <h3 className={css.title}>دورات في الإعلامية</h3>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <div className={css.item}>
              <Link href="#">
                <div className={css.color_2}>
                  <div className={css.icon}>
                    <i className="kipso-icon-web-programming"></i>
                  </div>
                  <h3 className={css.title}>دورات في البرمجة</h3>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <div className={css.item}>
              <Link href="#">
                <div className={css.color_3}>
                  <div className={css.icon}>
                    <i className="kipso-icon-music-player"></i>
                  </div>
                  <h3 className={css.title}>دورات في Autodesk</h3>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <div className={css.item}>
              <Link href="#">
                <div className={css.color_4}>
                  <div className={css.icon}>
                    <i className="kipso-icon-camera"></i>
                  </div>
                  <h3 className={css.title}>دورات في اللغات</h3>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <div className={css.item}>
              <Link href="#">
                <div className={css.color_5}>
                  <div className={css.icon}>
                    <i className="kipso-icon-targeting"></i>
                  </div>
                  <h3 className={css.title}>المنهج الليبيي</h3>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <div className={css.item}>
              <Link href="#">
                <div className={css.color_6}>
                  <div className={css.icon}>
                    <i className="kipso-icon-health"></i>
                  </div>
                  <h3 className={css.title}>المنهج التونسي</h3>
                </div>
              </Link>
            </div>
          </div>
        </Slider>
        <Link to="/categories" className={css.button}>
          تصفح جميع المحاور
        </Link>
      </div>
    </section>
  );
};

export default Categories;
