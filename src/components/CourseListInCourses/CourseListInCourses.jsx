import CourseCardInCourses from "../CourseCardInCourses/CourseCardInCourses";
import css from "./CourseListInCourses.module.scss";

const CourseListInCourses = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <ul className="css.list">
          <CourseCardInCourses />
        </ul>
      </div>
    </section>
  );
};

export default CourseListInCourses;
