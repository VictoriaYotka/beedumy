import css from "./Curricula.module.scss";
import { useTranslation } from "react-i18next";
import hero_image_sm from "../../assets/images/home/hero/image_sm.webp";
import triangle_green_little_sm from "../../assets/images/home/hero/triangle-green-little_sm.webp";
import CoursesFilterInCourses from "../../components/CoursesFilterInCourses/CoursesFilterInCourses";
import { useParams } from "react-router-dom";
import CourseCardInCourses from "../../components/CourseCardInCourses/CourseCardInCourses";

const Curricula = () => {
  const { t } = useTranslation();
  const { curricula } = useParams();

  return (
    <>
      <CoursesFilterInCourses curricula={t(curricula)} />;
      <section className={css.section}>
        <div className={css.container}>
          <ul className={css.list}>
            <CourseCardInCourses
              course_image={hero_image_sm}
              title="Course Title1"
              category="Category1"
              admin="Name Surname1"
              admin_image={triangle_green_little_sm}
              hours="Hours"
              downloaded="Downl"
              description="Course descr1"
            />
            <CourseCardInCourses
              title="Course Title2"
              category="Category2"
              admin="Name Surname"
              hours="Hours2"
              downloaded="Downl"
              description="Course descr2"
            />
            <CourseCardInCourses
              title="Course Title3"
              category="Category3"
              admin="Name Surname3"
              hours="Hours3"
              downloaded="Downl"
              description="Course descr3"
            />
            <CourseCardInCourses
              title="Course Title1"
              category="Category1"
              admin="Name Surname1"
              hours="Hours"
              downloaded="Downl"
              description="Course descr1"
            />
            <CourseCardInCourses
              title="Course Title2"
              category="Category2"
              admin="Name Surname"
              hours="Hours2"
              downloaded="Downl"
              description="Course descr2"
            />
            <CourseCardInCourses
              title="Course Title3"
              category="Category3"
              admin="Name Surname3"
              hours="Hours3"
              downloaded="Downl"
              description="Course descr3"
            />
          </ul>
        </div>
      </section>
    </>
  );
};

export default Curricula;
