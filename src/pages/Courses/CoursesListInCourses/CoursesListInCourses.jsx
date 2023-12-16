import CourseCardInCourses from "../../../components/CourseCardInCourses/CourseCardInCourses";
import css from "./CoursesListInCourses.module.scss";

const CoursesListInCourses = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <ul className={css.list}>
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
  );
};

export default CoursesListInCourses;
