import css from "./CoursesListInCategories.module.scss";
import CourseCardInCategories from "../../../components/CourseCardInCategories/CourseCardInCategories";
import Slider from "react-slick";
import hero_image_sm from "../../../assets/images/home/hero/image_sm.webp";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const CoursesListInCategories = ({ heading }) => {
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
          <h3 className={css.list_heading}>{heading}</h3>
        </SectionAnimationWrapper>

        <SectionAnimationWrapper>
          <Slider {...settings}>
            <CourseCardInCategories
              notion="notion"
              img={hero_image_sm}
              imgAlt="about image"
              preheader="Preheader"
              header="Header"
              rating="stars"
              descr="Some description here"
              id="123"
            />

            <CourseCardInCategories
              notion="notion"
              img={hero_image_sm}
              imgAlt="about image"
              preheader="Preheader"
              header="Header"
              rating="stars"
              descr="Some description here"
              id="123"
            />

            <CourseCardInCategories
              notion="notion"
              img={hero_image_sm}
              imgAlt="about image"
              preheader="Preheader"
              header="Header"
              rating="stars"
              descr="Some description here"
              id="123"
            />

            <CourseCardInCategories
              notion="notion"
              img={hero_image_sm}
              imgAlt="about image"
              preheader="Preheader"
              header="Header"
              rating="stars"
              descr="Some description here"
              id="123"
            />

            <CourseCardInCategories
              notion="notion"
              img={hero_image_sm}
              imgAlt="about image"
              preheader="Preheader"
              header="Header"
              rating="stars"
              descr="Some description here"
              id="123"
            />
          </Slider>
        </SectionAnimationWrapper>
      </div>
    </section>
  );
};

export default CoursesListInCategories;
