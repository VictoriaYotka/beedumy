import css from "./Feedback.module.scss";
import hero_image from "../../../assets/images/home/hero/image.png";
import icons from "../../../assets/images/icons/icons.svg";
import Slider from "react-slick";

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    swipeToSlide: true,
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 923,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 481,
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
          شهادات تلامذتنا عبر مواقع التواصل الاجتماعي
        </h2>
        <Slider {...settings}>
          <div className={css.item}>
            <div className={css.icon_wrapper}>
              <svg className={css.icon}>
                <use href={icons + "#quotes"}></use>
              </svg>
            </div>
            <p className={css.content}>
              التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب وجهد
            </p>
            <img src={hero_image} alt="" loading="lazy" className={css.image} />
            <p className={css.name}>إلهام بن عبيد</p>
            <p className={css.descr}>تلميذة</p>
          </div>

          <div className={css.item}>
            <div className={css.icon_wrapper}>
              <svg className={css.icon}>
                <use href={icons + "#quotes"}></use>
              </svg>
            </div>
            <p className={css.content}>
              التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب وجهد
              التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب وجهد
            </p>
            <img src={hero_image} alt="" loading="lazy" className={css.image} />
            <p className={css.name}>إلهام بن عبيد</p>
            <p className={css.descr}>تلميذة</p>
          </div>

          <div className={css.item}>
            <div className={css.icon_wrapper}>
              <svg className={css.icon}>
                <use href={icons + "#quotes"}></use>
              </svg>
            </div>
            <p className={css.content}>
              التمارين التفاعلية Vraiment حاجة مزيان
            </p>
            <img src={hero_image} alt="" loading="lazy" className={css.image} />
            <p className={css.name}>إلهام بن عبيد</p>
            <p className={css.descr}>تلميذة</p>
          </div>

          <div className={css.item}>
            <div className={css.icon_wrapper}>
              <svg className={css.icon}>
                <use href={icons + "#quotes"}></use>
              </svg>
            </div>
            <p className={css.content}>
              التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب وجهد
            </p>
            <img src={hero_image} alt="" loading="lazy" className={css.image} />
            <p className={css.name}>إلهام بن عبيد</p>
            <p className={css.descr}>تلميذة</p>
          </div>

          <div className={css.item}>
            <div className={css.icon_wrapper}>
              <svg className={css.icon}>
                <use href={icons + "#quotes"}></use>
              </svg>
            </div>
            <p className={css.content}>
              التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب وجهد
            </p>
            <img src={hero_image} alt="" loading="lazy" className={css.image} />
            <p className={css.name}>إلهام بن عبيد</p>
            <p className={css.descr}>تلميذة</p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Feedback;
