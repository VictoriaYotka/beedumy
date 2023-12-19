import css from "./FavoriteCourses.module.scss";
import CourseCardInCourses from "../../../components/CourseCardInCourses/CourseCardInCourses";

const FavoriteCourses = () => {
  return (
    <ul className={css.list}>
      <CourseCardInCourses
        title="Course Title1"
        category="Category1"
        admin="Name Surname"
        hours="Hours1"
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
        admin="Name Surname"
        hours="Hours3"
        downloaded="Downl"
        description="Course descr3"
      />
      <CourseCardInCourses
        title="Course Title4"
        category="Category4"
        admin="Name Surname"
        hours="Hours4"
        downloaded="Downl"
        description="Course descr4"
      />
    </ul>
  );
};

export default FavoriteCourses;
