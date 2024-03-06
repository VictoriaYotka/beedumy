import { lazy } from "react";
import css from "./Home.module.scss";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import Hero from "./Hero/Hero";
import Categories from "./Categories/Categories";
import RequestedCoursesHeader from "./RequestedCoursesHeader/RequestedCoursesHeader";
import LearnMore from "./LearnMore/LearnMore";
import SectionAnimationWrapper from "../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import { useEffect } from "react";
import { carouselsSettings, replaceHyphensWithSpaces } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  coursesSelector,
  newsSelector,
  teachersSelector,
  testimonialsSelector,
} from "../../redux/selectors/contentSelectors";
import { homePage } from "../../redux/operations/contentOperations";
import { baseUrl } from "../../constants";

const CourseCardInCategories = lazy(() =>
  import("../../components/CourseCardInCategories/CourseCardInCategories")
);
const TeacherCard = lazy(() =>
  import("../../components/TeacherCard/TeacherCard")
);
const MobileApp = lazy(() => import("./MobileApp/MobileApp"));
const FeedbackCard = lazy(() => import("./FeedbackCard/FeedbackCard"));
const ArticleCard = lazy(() => import("./ArticleCard/ArticleCard"));
const Partners = lazy(() => import("./Partners/Partners"));
const Subscription = lazy(() => import("./Subscription/Subscription"));

const Home = ({ direction }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const courses = useSelector(coursesSelector);
  const teachers = useSelector(teachersSelector);
  const news = useSelector(newsSelector);
  const testimonials = useSelector(testimonialsSelector);

  useEffect(() => {
    dispatch(homePage());
  }, [dispatch]);

  const handleSubscriptionFormSubmit = (e) => {
    e.preventDefault();

    const email = e.target.elements.subscription_email.value;

    console.log(email);

    e.target.reset();
  };

  return (
    <>
      <Hero />

      <Categories direction={direction} />

      <RequestedCoursesHeader />

      {/* requested courses list */}
      <SectionAnimationWrapper>
        <section className={css.requested_courses_section}>
          <div className={css.requested_courses_container}>
            <Slider
              {...{
                initialSlide: carouselsSettings.getRandomInt(courses.length),
                rtl: direction === "rtl" ? true : false,
                ...carouselsSettings.requestedCoursesSectionSettings,
              }}
            >
              {courses.map((el, index) => {
                const { image_cover, teacher, slug, type, id } = el;
                const img = `${baseUrl}${image_cover}`;
                return (
                  <CourseCardInCategories
                    key={index}
                    notion={type}
                    img={img}
                    imgAlt={replaceHyphensWithSpaces(slug)}
                    preheader={teacher.full_name}
                    header={replaceHyphensWithSpaces(slug)}
                    rating="stars"
                    descr="Some description"
                    id={id}
                  />
                );
              })}
            </Slider>
          </div>
        </section>
      </SectionAnimationWrapper>

      <LearnMore />

      {/* teachers section */}
      <section className={css.teachers_section}>
        <div className={css.teachers_container}>
          <SectionAnimationWrapper>
            <h2 className={css.teachers_heading}>
              {t("home.teachers_header")}
            </h2>
          </SectionAnimationWrapper>
          <SectionAnimationWrapper>
            <Slider
              {...{
                initialSlide: carouselsSettings.getRandomInt(teachers.length),
                rtl: direction === "rtl" ? true : false,
                ...carouselsSettings.teachersSectionSettings,
              }}
            >
              {teachers.map((el, index) => {
                const { full_name, avatar, bio } = el;
                const img = `${baseUrl}${avatar}`;

                return (
                  <TeacherCard
                    key={index}
                    img={img}
                    name={full_name}
                    occupation={bio}
                    descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. exercitationem."
                  />
                );
              })}
            </Slider>
          </SectionAnimationWrapper>
          {/* <Link className={css.teachers_button}>
            {t("home.teachers_button")}
          </Link> */}
        </div>
      </section>

      <MobileApp />

      {/* feedback */}
      <section className={css.feedback_section}>
        <div className={css.feedback_container}>
          <SectionAnimationWrapper>
            <h2 className={css.feedback_heading}>
              {t("home.feedback_heading")}
            </h2>
          </SectionAnimationWrapper>
          <SectionAnimationWrapper>
            <Slider
              {...{
                initialSlide: carouselsSettings.getRandomInt(
                  testimonials.length
                ),
                rtl: direction === "rtl" ? true : false,
                ...carouselsSettings.feedbackSectionSettings,
              }}
            >
              <FeedbackCard
                content="التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب وجهد"
                name="Student name"
                descr="Lorem ipsum "
              />

              <FeedbackCard
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sint odit. Aliquam necessitatibus architecto minima facere corporis  dicta."
                name="Student name"
                descr="مدرس إعلامية"
              />

              <FeedbackCard
                content="Lorem ipsum dolor odit. Aliquam necessitatibus architecto minima facere corporis  dicta."
                name="Student name"
                descr="مدرس إعلامية"
              />

              <FeedbackCard
                content="Lorem ipsum dolor sit amet consecteturarchitecto minima facere corporis  dicta."
                name="Student name"
                descr="مدرس إعلامية"
              />

              <FeedbackCard
                content="التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب وجهد"
                name="Student name"
                descr="Lorem ipsum "
              />
            </Slider>
          </SectionAnimationWrapper>
        </div>
      </section>

      {/* articles */}
      <section className={css.article_section}>
        <div className={css.article_container}>
          <SectionAnimationWrapper>
            <h2 className={css.article_heading}>{t("home.articles_header")}</h2>
          </SectionAnimationWrapper>
          <div className={css.article_list_wrapper}>
            <SectionAnimationWrapper>
              <Slider
                {...{
                  initialSlide: carouselsSettings.getRandomInt(news.length),
                  rtl: direction === "rtl" ? true : false,
                  ...carouselsSettings.articleSectionSettings,
                }}
              >
                <ArticleCard
                  date="06 أوت"
                  name="كُتب بواسطة آدم . 12 تعليق"
                  content="أثر التعليم التفاعلي في مناهج التعليم الحديثة في نفسية الطفل"
                />

                <ArticleCard
                  date="06 أوت"
                  name="كُتب بواسطة آدم . 12 تعليق"
                  content="أثر التعليم التفاعلي في مناهج التعليم الحديثة في نفسية الطفل"
                />

                <ArticleCard
                  date="06 أوت"
                  name="كُتب بواسطة آدم . 12 تعليق"
                  content="أثر التعليم التفاعلي في مناهج التعليم الحديثة في نفسية الطفل"
                />

                <ArticleCard
                  date="06 أوت"
                  name="كُتب بواسطة آدم . 12 تعليق"
                  content="أثر التعليم التفاعلي في مناهج التعليم الحديثة في نفسية الطفل"
                />
              </Slider>
            </SectionAnimationWrapper>
          </div>
        </div>
      </section>

      <Partners />

      <Subscription
        handleSubscriptionFormSubmit={handleSubscriptionFormSubmit}
      />
    </>
  );
};

export default Home;
