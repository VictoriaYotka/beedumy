import css from "./Course.module.scss";
import SingleCourseHeader from "../../components/SingleCourseHeader/SingleCourseHeader";
import SingleCourseCard from "../../components/SingleCourseCard/SingleCourseCard";
import SingleCourseAdditionalInfo from "../../components/SingleCourseAdditionalInfo/SingleCourseAdditionalInfo";

const Course = () => {
  return (
    <>
      <SingleCourseHeader heading="heading" level="level" />
      <section className={css.section}>
        <div className={css.container}>
          <SingleCourseAdditionalInfo fullPrice="34" discountedPrice="18" />
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
