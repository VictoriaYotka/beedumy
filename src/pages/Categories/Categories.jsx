import css from "./Categories.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import StartLearningTrip from "./StartLearningTrip/StartLearningTrip";
import FAQ from "./FAQ/FAQ";
import CourseCardInCategories from "../../components/CourseCardInCategories/CourseCardInCategories";
import SectionAnimationWrapper from "../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import { Link } from "react-router-dom";
import { carouselsSettings, replaceHyphensWithSpaces } from "../../utils";
import { useEffect, useState } from "react";
import CoursesFilterInCategories from "./CoursesFilterInCategories/CoursesFilterInCategories";
import { useDispatch, useSelector } from "react-redux";
import { coursesSelector } from "../../redux/selectors/contentSelectors";
import { courses } from "../../redux/operations/contentOperations";
import { baseUrl } from "../../constants";

const Categories = ({ direction }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [allCourses, setAllCourses] =
    useState(useSelector(coursesSelector)) || [];

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (allCourses.length === 0) {
      dispatch(courses())
        .unwrap()
        .then(({ webinar }) => setAllCourses(webinar));
    }
  }, [allCourses, dispatch, setAllCourses]);

  // ADD FILTER!!!
  const tunisianCourses = allCourses;
  const libyanCourses = allCourses;
  const formativeCourses = allCourses;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim !== "") {
      console.log(inputValue);
      e.target.reset();
    }
  };

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
              onChange={handleInputChange}
              value={inputValue}
              className={css.input}
              id="categories_search_input"
              name="categories_search_input"
              type="text"
              placeholder={t("categories.search_input_placeholder")}
            />
          </form>
        </div>
      </section>
      <CoursesFilterInCategories />
      {/* tunisian curriculum courses list */}
      <section className={css.section}>
        <div className={css.container}>
          <SectionAnimationWrapper>
            <h3 className={css.list_heading}>
              <Link to="/categories/tunisian" className={css.list_heading_link}>
                {t("tunisian")}
                <svg className={css.icon}>
                  <use href={icons + "#chevron-down"}></use>
                </svg>
              </Link>
            </h3>
          </SectionAnimationWrapper>

          <SectionAnimationWrapper>
            <Slider
              {...{
                initialSlide: carouselsSettings.getRandomInt(
                  tunisianCourses.length
                ),
                rtl: direction === "rtl" ? true : false,
                ...carouselsSettings.categoriesPageSettings,
              }}
            >
              {tunisianCourses.map((el, index) => {
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
          </SectionAnimationWrapper>
        </div>
      </section>

      {/* libyan curriculum courses list */}
      <section className={css.section}>
        <div className={css.container}>
          <SectionAnimationWrapper>
            <h3 className={css.list_heading}>
              <Link to="/categories/libyan" className={css.list_heading_link}>
                {t("libyan")}
                <svg className={css.icon}>
                  <use href={icons + "#chevron-down"}></use>
                </svg>
              </Link>
            </h3>
          </SectionAnimationWrapper>

          <SectionAnimationWrapper>
            <Slider
              {...{
                initialSlide: carouselsSettings.getRandomInt(
                  libyanCourses.length
                ),
                rtl: direction === "rtl" ? true : false,
                ...carouselsSettings.categoriesPageSettings,
              }}
            >
              {libyanCourses.map((el, index) => {
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
          </SectionAnimationWrapper>
        </div>
      </section>
      {/* formative courses list */}
      <section className={css.section}>
        <div className={css.container}>
          <SectionAnimationWrapper>
            <h3 className={css.list_heading}>
              <Link
                to="/categories/formative"
                className={css.list_heading_link}
              >
                {t("formative")}
                <svg className={css.icon}>
                  <use href={icons + "#chevron-down"}></use>
                </svg>
              </Link>
            </h3>
          </SectionAnimationWrapper>

          <SectionAnimationWrapper>
            <Slider
              {...{
                initialSlide: carouselsSettings.getRandomInt(
                  formativeCourses.length
                ),
                rtl: direction === "rtl" ? true : false,
                ...carouselsSettings.categoriesPageSettings,
              }}
            >
              {formativeCourses.map((el, index) => {
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
          </SectionAnimationWrapper>
        </div>
      </section>
      <StartLearningTrip />
      <FAQ />
    </>
  );
};

export default Categories;
