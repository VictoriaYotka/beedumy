import css from "./SingleCourse.module.scss";
import triangle_green_little_sm from "../../assets/images/home/hero/triangle-green-little_sm.webp";
import SingleCourseCard from "./SingleCourseCard/SingleCourseCard";
import SingleCourseAdditionalInfo from "./SingleCourseAdditionalInfo/SingleCourseAdditionalInfo";
import SimplePageHeader from "../../components/SimplePageHeader/SimplePageHeader";

const SingleCourse = () => {
  return (
    <>
      <SimplePageHeader heading="heading" subheading="level" />
      <section className={css.section}>
        <div className={css.container}>
          <SingleCourseCard
            curriculum="curriculum"
            admin="Name Surname"
            admin_image={triangle_green_little_sm}
            title="Course title"
          />
          <SingleCourseAdditionalInfo
            fullPrice="34"
            discountedPrice="18"
            currency="د.ل"
            hours="40"
            purchasedTimes="30"
            degree="متقدم"
            language="العربية"
          />
        </div>
      </section>
    </>
  );
};

export default SingleCourse;
