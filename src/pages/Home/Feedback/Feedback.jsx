import css from "./Feedback.module.scss";
import { useTranslation } from "react-i18next";
import hero_image_sm from "../../../assets/images/home/hero/image_sm.webp";
import Slider from "react-slick";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import FeedbackCard from "./FeedbackCard/FeedbackCard";

const Feedback = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
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
        <SectionAnimationWrapper>
          <h2 className={css.heading}>{t("home.feedback_heading")}</h2>
        </SectionAnimationWrapper>
        <SectionAnimationWrapper>
          <Slider {...settings}>
            <FeedbackCard
              content="التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب وجهد"
              name="Student name"
              descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sint odit. "
            />

            <FeedbackCard
              content="التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب وجهد"
              name="Student name"
              descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sint odit. Aliquam necessitatibus architecto minima facere corporis  dicta."
            />

            <FeedbackCard
              content="التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب وجهد"
              name="Student name"
              descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sint odit. Aliquam similique, veniam libero exercitationem incidunt fugit dicta."
            />

            <FeedbackCard
              content="التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب وجهد"
              img={hero_image_sm}
              name="Student name"
              descr="Lorem ipsum dolor fugit dicta."
            />

            <FeedbackCard
              content="التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب وجهد"
              img={hero_image_sm}
              name="Student name"
              descr="Lorem ipsum  facere corporis debitis esse officiis dicta."
            />
          </Slider>
        </SectionAnimationWrapper>
      </div>
    </section>
  );
};

export default Feedback;
