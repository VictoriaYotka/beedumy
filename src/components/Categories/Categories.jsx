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
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.heading}>
          هنا تبدأ رحلتك <br /> من العِلم إلى العَمل
        </h2>

        <Slider {...settings}>
          <div>
            <div className={css.item}>
              <Link href="#">
                <div className={css.color_1}>
                  <div className={css.icon}>
                    <i class="kipso-icon-desktop"></i>
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
        {/* <ul className={css.list}>
          <li className={css.item}>
            <div className={css.color_1}>
              <div className={css.icon}>
                <i class="kipso-icon-desktop"></i>
              </div>
              <h3 className={css.title}>
                <Link href="#">دورات في الإعلامية</Link>
              </h3>
            </div>
          </li>

          <li className={css.item}>
            <div className={css.color_2}>
              <div className={css.icon}>
                <i className="kipso-icon-web-programming"></i>
              </div>
              <h3 className={css.title}>
                <Link href="#">دورات في البرمجة</Link>
              </h3>
            </div>
          </li>

          <li className={css.item}>
            <div className={css.color_3}>
              <div className={css.icon}>
                <i className="kipso-icon-music-player"></i>
              </div>
              <h3 className={css.title}>
                <Link href="#">دورات في Autodesk</Link>
              </h3>
            </div>
          </li>

          <li className={css.item}>
            <div className={css.color_4}>
              <div className={css.icon}>
                <i className="kipso-icon-camera"></i>
              </div>
              <h3 className={css.title}>
                <Link href="#">دورات في اللغات</Link>
              </h3>
            </div>
          </li>

          <li className={css.item}>
            <div className={css.color_5}>
              <div className={css.icon}>
                <i className="kipso-icon-targeting"></i>
              </div>
              <h3 className={css.title}>
                <Link href="#">المنهج الليبيي</Link>
              </h3>
            </div>
          </li>

          <li className={css.item}>
            <div className={css.color_6}>
              <div className={css.icon}>
                <i className="kipso-icon-health"></i>
              </div>
              <h3 className={css.title}>
                <Link href="#">المنهج التونسي</Link>
              </h3>
            </div>
          </li>
        </ul> */}
        <button className={css.button}>تصفح جميع المحاور</button>
      </div>
    </section>
  );
};

export default Categories;
