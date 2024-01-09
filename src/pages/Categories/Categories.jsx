import css from "./Categories.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import hero_image_sm from "../../assets/images/home/hero/image_sm.webp";
import StartLearningTrip from "./StartLearningTrip/StartLearningTrip";
import FAQ from "./FAQ/FAQ";
import CourseCardInCategories from "../../components/CourseCardInCategories/CourseCardInCategories";
import SectionAnimationWrapper from "../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import { Link } from "react-router-dom";
import { carouselsSettings, useConditionalListsTransition } from "../../utils";
import { useState } from "react";
import CoursesFilterInCategories from "./CoursesFilterInCategories/CoursesFilterInCategories";

const Categories = () => {
  const { t } = useTranslation();

  const [isFilterShown, setIsFilterShown] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleShowFilter = () => {
    isFilterShown ? setIsFilterShown(false) : setIsFilterShown(true);
  };

  const transition = useConditionalListsTransition(isFilterShown);

  return (
    <>
      <section className={css.search_section}>
        <div className={css.search_container}>
          <form className={css.form} onSubmit={handleSubmit}>
            <button className={css.submit_button}>
              <svg className={css.submit_icon}>
                <use href={icons + "#search"}></use>
              </svg>
            </button>
            <input
              className={css.input}
              type="text"
              placeholder={t("categories.search_input_placeholder")}
            />
          </form>
          <button className={css.filter_button} onClick={toggleShowFilter}>
            <p>{t("categories.search_classification")}</p>
            <svg className={css.filter_icon}>
              <use href={icons + "#filter"}></use>
            </svg>
          </button>
        </div>
      </section>

      {transition((style, item) => {
        switch (item) {
          case true:
            return <CoursesFilterInCategories style={style} />;
          default:
            return null;
        }
      })}

      {/* tunisian curriculum courses list */}
      <section className={css.section}>
        <div className={css.container}>
          <SectionAnimationWrapper>
            <h3 className={css.list_heading}>
              <Link to="/courses/tunisian" className={css.list_heading_link}>
                {t("categories.search_classification_curricula_tunisian")}
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
              <Link to="/courses/libyan" className={css.list_heading_link}>
                {t("categories.search_classification_curricula_libyan")}
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

      {/* formative courses list */}
      <section className={css.section}>
        <div className={css.container}>
          <SectionAnimationWrapper>
            <h3 className={css.list_heading}>
              <Link to="/courses/formative" className={css.list_heading_link}>
                {t("categories.search_classification_curricula_formative")}
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
