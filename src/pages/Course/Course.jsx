import css from "./Course.module.scss";
import SingleCourseHeader from "../../components/SingleCourseHeader/SingleCourseHeader";
import SingleCourseCard from "../../components/SingleCourseCard/SingleCourseCard";

const Course = () => {
  return (
    <>
      <SingleCourseHeader heading="heading" level="level" />
      <section className={css.section}>
        <div className={css.container}>
          <SingleCourseCard
            curriculum="curriculum"
            admin="Name Surname"
            title="Course title"
          />
        </div>
      </section>
    </>
  );
};

export default Course;
