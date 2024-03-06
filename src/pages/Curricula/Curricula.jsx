import css from "./Curricula.module.scss";
import { useTranslation } from "react-i18next";
import CoursesFilterInCourses from "./CoursesFilterInCourses/CoursesFilterInCourses";
import { useParams } from "react-router-dom";
import CourseCard from "../../components/CourseCard/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { coursesSelector } from "../../redux/selectors/contentSelectors";
import { replaceHyphensWithSpaces } from "../../utils";
import { useEffect, useState } from "react";
import { courses } from "../../redux/operations/contentOperations";
import { baseUrl } from "../../constants";

const Curricula = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { curricula } = useParams();

  // ADD FILTER!!!
  const [allCourses, setAllCourses] =
    useState(useSelector(coursesSelector)) || [];

  useEffect(() => {
    if (allCourses.length === 0) {
      dispatch(courses())
        .unwrap()
        .then(({ webinar }) => setAllCourses(webinar));
    }
  }, [allCourses, dispatch, setAllCourses]);

  return (
    <>
      <CoursesFilterInCourses curricula={t(curricula)} />
      <section className={css.section}>
        <div className={css.container}>
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
                    rating="stars"
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
