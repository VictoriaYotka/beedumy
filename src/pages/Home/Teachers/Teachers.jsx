import { Link } from "react-router-dom";
import css from "./Teachers.module.scss";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import TeacherCard from "../../../components/TeacherCard/TeacherCard";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const Teachers = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
        <SectionAnimationWrapper>
          <h2 className={css.heading}>{t("home.teachers_header")}</h2>
        </SectionAnimationWrapper>
        <SectionAnimationWrapper>
          <Slider {...settings}>
            <TeacherCard />

            <TeacherCard />

            <TeacherCard />

            <TeacherCard />

            <TeacherCard />
          </Slider>
        </SectionAnimationWrapper>
        <Link className={css.button}>{t("home.teachers_button")}</Link>
      </div>
    </section>
  );
};

export default Teachers;
