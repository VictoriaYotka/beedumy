import css from "./SingleCourse.module.scss";
import SingleCourseCard from "../../components/SingleCourseCard/SingleCourseCard";
import SingleCourseAdditionalInfo from "../../components/SingleCourseAdditionalInfo/SingleCourseAdditionalInfo";
import SingleCourseHeader from "../../components/SingleCourseHeader/SingleCourseHeader";

const SingleCourse = () => {
  return (
    <>
      <SingleCourseHeader heading="heading" subheading="level" />
      <section className={css.section}>
        <div className={css.container}>
          <SingleCourseCard
            curriculum="curriculum"
            admin="Name Surname"
            title="Course title"
          />
          <SingleCourseAdditionalInfo fullPrice="34" discountedPrice="18" />
        </div>
      </section>
    </>
  );
};

export default SingleCourse;
