import css from "./Feedback.module.scss";
import hero_image from "../../assets/images/home/hero/image.png";
import icons from "../../assets/images/icons/icons.svg";
import Slider from "react-slick";

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 922,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
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
          شهادات تلامذتنا <br />
          عبر مواقع التواصل الاجتماعي
        </h2>
        <Slider {...settings}>
          <div>
            <div className={css.item}>
              <div className={css.icon_wrapper}>
                <svg className={css.icon}>
                  <use href={icons + "#quotes"}></use>
                </svg>
              </div>
              <p className={css.content}>
                التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب
                وجهد
              </p>
              <img src={hero_image} alt="" className={css.image} />
              <p className={css.name}>إلهام بن عبيد</p>
              <p className={css.descr}>تلميذة</p>
            </div>
          </div>
          <div>
            <div className={css.item}>
              <div className={css.icon_wrapper}>
                <svg className={css.icon}>
                  <use href={icons + "#quotes"}></use>
                </svg>
              </div>
              <p className={css.content}>
                التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب
                وجهد
              </p>
              <img src={hero_image} alt="" className={css.image} />
              <p className={css.name}>إلهام بن عبيد</p>
              <p className={css.descr}>تلميذة</p>
            </div>
          </div>
          <div>
            <div className={css.item}>
              <div className={css.icon_wrapper}>
                <svg className={css.icon}>
                  <use href={icons + "#quotes"}></use>
                </svg>
              </div>
              <p className={css.content}>
                التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب
                وجهد
              </p>
              <img src={hero_image} alt="" className={css.image} />
              <p className={css.name}>إلهام بن عبيد</p>
              <p className={css.descr}>تلميذة</p>
            </div>
          </div>
          <div>
            <div className={css.item}>
              <div className={css.icon_wrapper}>
                <svg className={css.icon}>
                  <use href={icons + "#quotes"}></use>
                </svg>
              </div>
              <p className={css.content}>
                التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب
                وجهد
              </p>
              <img src={hero_image} alt="" className={css.image} />
              <p className={css.name}>إلهام بن عبيد</p>
              <p className={css.descr}>تلميذة</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Feedback;
