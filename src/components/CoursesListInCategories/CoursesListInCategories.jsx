import css from "./CoursesListInCategories.module.scss";
import CourseCardInCategories from "../CourseCardInCategories/CourseCardInCategories";
import Slider from "react-slick";
import hero_image from "../../assets/images/home/hero/image.png";

const CoursesListInCategories = ({ heading }) => {
  const settings = {
    dots: true,
    infinite: true,
    // infinite: children.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    pauseOnHover: true,
    rtl: true,
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
    <section className={css.section}>
      <div className={css.container}>
        <h3 className={css.list_heading}>{heading}</h3>

        <Slider {...settings}>
          {/* <div className={css.item_wrapper}> */}
          <CourseCardInCategories
            notion="notion"
            img={hero_image}
            imgAlt="about image"
            preheader="Preheader"
            header="Header"
            rating="stars"
            descr="Some description here"
            id="123"
          />

          <CourseCardInCategories
            notion="notion"
            img={hero_image}
            imgAlt="about image"
            preheader="Preheader"
            header="Header"
            rating="stars"
            descr="Some description here"
            id="123"
          />
          {/* </div> */}

          {/* <div className={css.item_wrapper}> */}
          <CourseCardInCategories
            notion="notion"
            img={hero_image}
            imgAlt="about image"
            preheader="Preheader"
            header="Header"
            rating="stars"
            descr="Some description here"
            id="123"
          />
          {/* </div> */}

          {/* <div className={css.item_wrapper}> */}
          <CourseCardInCategories
            notion="notion"
            img={hero_image}
            imgAlt="about image"
            preheader="Preheader"
            header="Header"
            rating="stars"
            descr="Some description here"
            id="123"
          />
          {/* </div> */}

          <CourseCardInCategories
            notion="notion"
            img={hero_image}
            imgAlt="about image"
            preheader="Preheader"
            header="Header"
            rating="stars"
            descr="Some description here"
            id="123"
          />
        </Slider>
      </div>
    </section>
  );
};

export default CoursesListInCategories;
