import css from "./Categories.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import hero_image_sm from "../../assets/images/home/hero/image_sm.webp";
import CoursesFilterInCategories from "./CoursesFilterInCategories/CoursesFilterInCategories";
import StartLearningTrip from "./StartLearningTrip/StartLearningTrip";
import FAQ from "./FAQ/FAQ";
import CourseCardInCategories from "../../components/CourseCardInCategories/CourseCardInCategories";
import SectionAnimationWrapper from "../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import { Link } from "react-router-dom";
import { carouselsSettings } from "../../utils";

const Categories = () => {
  const { t } = useTranslation();

  return (
    <>
      <CoursesFilterInCategories />

      {/* tunisian curriculum courses list */}
      <section className={css.section}>
        <div className={css.container}>
          <SectionAnimationWrapper>
            <h3 className={css.list_heading}>
              <Link to="/courses-tunisian" className={css.list_heading_link}>
                {t("categories.heading_tunisian_curriculum")}
                <svg className={css.icon}>
                  <use href={icons + "#chevron-down"}></use>
                </svg>
              </Link>
            </h3>
          </SectionAnimationWrapper>

          <SectionAnimationWrapper>
            <Slider {...carouselsSettings.categoriesPageSettings}>
              <CourseCardInCategories
                notion="notion"
                imgAlt="about image"
                preheader="Preheader"
                header="Header"
                rating="stars"
                descr="Some description here"
                id="123"
              />

              <CourseCardInCategories
                notion="notion"
                imgAlt="about image"
                preheader="Preheader"
                header="Header"
                rating="stars"
                descr="Some description here"
                id="123"
              />

              <CourseCardInCategories
                notion="notion"
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

      {/* libyan curriculum courses list */}
      <section className={css.section}>
        <div className={css.container}>
          <SectionAnimationWrapper>
            <h3 className={css.list_heading}>
              <Link to="/courses-libyan" className={css.list_heading_link}>
                {t("categories.heading_libyan_curriculum")}
                <svg className={css.icon}>
                  <use href={icons + "#chevron-down"}></use>
                </svg>
              </Link>
            </h3>
          </SectionAnimationWrapper>

          <SectionAnimationWrapper>
            <Slider {...carouselsSettings.categoriesPageSettings}>
              <CourseCardInCategories
                notion="notion"
                imgAlt="about image"
                preheader="Preheader"
                header="Header"
                rating="stars"
                descr="Some description here"
                id="123"
              />

              <CourseCardInCategories
                notion="notion"
                imgAlt="about image"
                preheader="Preheader"
                header="Header"
                rating="stars"
                descr="Some description here"
                id="123"
              />

              <CourseCardInCategories
                notion="notion"
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

      <StartLearningTrip />
      <FAQ />
    </>
  );
};

export default Categories;
