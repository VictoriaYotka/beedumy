import css from "./RequestedCourses.module.scss";
import hero_image_sm from "../../../assets/images/home/hero/image_sm.webp";
import Slider from "react-slick";
import CourseCardInCategories from "../../../components/CourseCardInCategories/CourseCardInCategories";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const RequestedCourses = () => {
  const settings = {
    dots: true,
    infinite: true,
    // infinite: children.length > 3,
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
          initialSlide: 1,
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
    <SectionAnimationWrapper>
      <section className={css.section}>
        <div className="container">
          <Slider {...settings}>
            <CourseCardInCategories
              notion="notion"
              img={hero_image_sm}
              imgAlt="about image"
              preheader="Preheader"
              header="Header"
              rating="stars"
              descr="Some description"
              id="123"
            />

            <CourseCardInCategories
              notion="notion"
              img={hero_image_sm}
              imgAlt="about image"
              preheader="Preheader"
              header="Header"
              rating="stars"
              descr="Some description"
              id="123"
            />

            <CourseCardInCategories
              notion="notion"
              img={hero_image_sm}
              imgAlt="about image"
              preheader="Preheader"
              header="Header"
              rating="stars"
              descr="Some description"
              id="123"
            />

            <CourseCardInCategories
              notion="notion"
              // img={hero_image_sm}
              imgAlt="about image"
              preheader="Preheader"
              header="Header"
              rating="stars"
              descr="Some description"
              id="123"
            />

            <CourseCardInCategories
              notion="notion"
              // img={hero_image_sm}
              imgAlt="about image"
              preheader="Preheader"
              header="Header"
              rating="stars"
              descr="Some description"
              id="123"
            />
          </Slider>
        </div>
      </section>
    </SectionAnimationWrapper>
  );
};

export default RequestedCourses;
