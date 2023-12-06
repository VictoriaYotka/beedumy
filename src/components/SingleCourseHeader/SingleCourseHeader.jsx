import css from "./SingleCourseHeader.module.scss";

const SingleCourseHeader = ({ heading, subheading }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h3 className={css.heading}>{heading}</h3>
        <h5 className={css.subheading}>{subheading}</h5>
      </div>
    </section>
  );
};

export default SingleCourseHeader;
