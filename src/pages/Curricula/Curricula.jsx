import css from "./Curricula.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CoursesFilterInCourses from "./CoursesFilterInCourses/CoursesFilterInCourses";
import CourseCard from "../../components/CourseCard/CourseCard";
import { coursesSelector } from "../../redux/selectors/contentSelectors";
import { replaceHyphensWithSpaces, useConditionalSpring } from "../../utils";
import { courses } from "../../redux/operations/contentOperations";
import { baseUrl } from "../../constants";
import { animated } from "@react-spring/web";

const Curricula = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { curricula } = useParams();

  // ADD FILTER!!!
  const [allCourses, setAllCourses] =
    useState(useSelector(coursesSelector)) || [];

  const [filter, setFilter] = useState(null);
  const [activeFilterText, setActiveFilterText] = useState(null);

  useEffect(() => {
    if (allCourses.length === 0) {
      dispatch(courses())
        .unwrap()
        .then(({ webinar }) => setAllCourses(webinar));
    }
  }, [allCourses, dispatch, setAllCourses]);

  const handleSetFilter = (filter, text) => {
    setFilter(filter);
    setActiveFilterText(text);
    // add filter
  };

  const handleResetFilterClick = () => {
    setFilter(null);
    setActiveFilterText(null);
    // add filter
  };

  const transition =
    useConditionalSpring.useConditionalSingleCourseDetailsTransition(filter);

  return (
    <>
      <CoursesFilterInCourses
        curricula={t(curricula)}
        handleSetFilter={handleSetFilter}
      />

      <section className={css.section}>
        <div className={css.container}>
          {transition((style, item) => {
            return item !== null ? (
              <animated.div style={style} className={css.filtername_container}>
                <p>{activeFilterText}</p>

                <button
                  className={css.close_button}
                  onClick={handleResetFilterClick}
                >
                  <svg className={css.close_icon}>
                    <use href={icons + "#close"}></use>
                  </svg>
                </button>
              </animated.div>
            ) : null;
          })}

          <ul className={css.list}>
            {allCourses.map((el, index) => {
              const { image_cover, teacher, slug, type, id } = el;
              const img = `${baseUrl}${image_cover}`;
              return (
                <li className={css.item} key={index}>
                  <CourseCard
                    notion={type}
                    img={img}
                    imgAlt={replaceHyphensWithSpaces(slug)}
                    preheader={teacher.full_name}
                    header={replaceHyphensWithSpaces(slug)}
                    rating="4"
                    descr="Some description"
                    id={id}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Curricula;
