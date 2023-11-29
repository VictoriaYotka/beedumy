import { Link } from "react-router-dom";
import css from "./RequestedCourses.module.scss";
import hero_image from "../../assets/images/home/hero/image.png";
import Slider from "react-slick";
import CourseCard from "../CourseCard/CourseCard";

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
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <>
      <section className={css.heading_section}>
        <div className="container">
          <h2 className={css.heading}>
            المواد التعليميّة و الدّورات المرتقبة و الأكثر طلبا
          </h2>
        </div>
        <div className={css.triangle}></div>
      </section>
      <section className={css.courses_section}>
        <div className="container">
          <Slider {...settings}>
            <div>
              <div className={css.item_wrapper}>
                <CourseCard
                  notion="notion"
                  img={hero_image}
                  imgAlt="about image"
                  preheader="Preheader"
                  header="Header"
                  rating="stars"
                  descr="Some description here"
                  id="123"
                />
              </div>
            </div>
            <div>
              <div className={css.item_wrapper}>
                <CourseCard
                  notion="notion"
                  img={hero_image}
                  imgAlt="about image"
                  preheader="Preheader"
                  header="Header"
                  rating="stars"
                  descr="Some description here"
                  id="123"
                />
              </div>
            </div>
            <div>
              <div className={css.item_wrapper}>
                <CourseCard
                  notion="notion"
                  img={hero_image}
                  imgAlt="about image"
                  preheader="Preheader"
                  header="Header"
                  rating="stars"
                  descr="Some description here"
                  id="123"
                />
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className={css.learn_more_section}>
        <div className="container">
          <h2 className={css.learn_more_heading}>
            نوفّر تجربة تعليميّة تفاعليّة ونفتح آفاقا معرفيّة جديدة
          </h2>
          <Link className={css.learn_more_button}>تعرّف أكثر</Link>
        </div>
      </section>
    </>
  );
};

export default RequestedCourses;
