import { Link } from "react-router-dom";
import css from "./RequestedCourses.module.scss";
import hero_image from "../../assets/images/home/hero/image.png";
import Slider from "react-slick";

const RequestedCourses = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
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
    <>
      <section className={css.heading_section}>
        <div className="container">
          <h2 className={css.heading}>
            المواد التعليميّة و الدّورات <br />
            المرتقبة و الأكثر طلبا
          </h2>
        </div>
        <div className={css.triangle}></div>
      </section>
      <section className={css.courses_section}>
        <div className="container">
          <Slider {...settings}>
            <div>
              <div className={css.item}>
                <div className={css.img_thumb}>
                  <p className={css.notion}>notion notion</p>
                  <img
                    src={hero_image}
                    alt="course preview"
                    className={css.image}
                  />
                </div>
                <div className={css.info_thumb}>
                  <h4 className={css.preheader}>Preheader</h4>
                  <h3 className={css.header}>Header</h3>
                  <div className={css.wrapper}>
                    <div className={css.rating}>stars</div>
                    <p className={css.descr}>Some description</p>
                  </div>
                  <Link className={css.course_button}>
                    Go to course <span className={css.glyph}> &#9664;</span>
                    {/* opposite side: &#9654; */}
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className={css.item}>
                <div className={css.img_thumb}>
                  <p className={css.notion}>notion button</p>
                  <img
                    src={hero_image}
                    alt="course preview"
                    className={css.image}
                  />
                </div>
                <div className={css.info_thumb}>
                  <h4 className={css.preheader}>Preheader</h4>
                  <h3 className={css.header}>Header</h3>
                  <div className={css.wrapper}>
                    <div className={css.rating}>stars</div>
                    <p className={css.descr}>Some description</p>
                  </div>
                  <Link className={css.course_button}>
                    Go to course <span className={css.glyph}> &#9664;</span>
                    {/* opposite side: &#9654; */}
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className={css.item}>
                <div className={css.img_thumb}>
                  <p className={css.notion}>notion button</p>
                  <img
                    src={hero_image}
                    alt="course preview"
                    className={css.image}
                  />
                </div>
                <div className={css.info_thumb}>
                  <h4 className={css.preheader}>Preheader</h4>
                  <h3 className={css.header}>Header</h3>
                  <div className={css.wrapper}>
                    <div className={css.rating}>stars</div>
                    <p className={css.descr}>Some description</p>
                  </div>
                  <Link className={css.course_button}>
                    Go to course <span className={css.glyph}> &#9664;</span>
                    {/* opposite side: &#9654; */}
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className={css.learn_more_section}>
        <div className="container">
          <h2 className={css.learn_more_heading}>
            نوفّر تجربة تعليميّة تفاعليّة <br />
            ونفتح آفاقا معرفيّة جديدة
          </h2>
          <Link className={css.learn_more_button}>تعرّف أكثر</Link>
        </div>
      </section>
    </>
  );
};

export default RequestedCourses;
