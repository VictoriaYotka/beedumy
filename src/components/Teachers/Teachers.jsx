import { Link } from "react-router-dom";
import css from "./Teachers.module.scss";
import Slider from "react-slick";
import TeacherCard from "../TeacherCard/TeacherCard";

const Teachers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    swipeToSlide: true,
    pauseOnHover: true,
    rtl: true,
    responsive: [
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
        <h2 className={css.heading}>تعرّف على نخبة من الأساتذة والمختصّين</h2>
        <Slider {...settings}>
          <TeacherCard />

          <TeacherCard />

          <TeacherCard />

          <TeacherCard />

          <TeacherCard />
        </Slider>
        <Link className={css.button}>نظرة على بقية المختصّين</Link>
      </div>
    </section>
  );
};

export default Teachers;
