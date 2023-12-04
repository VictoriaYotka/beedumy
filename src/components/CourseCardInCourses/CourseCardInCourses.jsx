import css from "./CourseCardInCourses.module.scss";

const CourseCardInCourses = () => {
  return (
    <>
      <li className={css.item}>
        <div className={css.img_thumb}>
          <img src="" alt="" />
          <i className="far fa-heart"></i>
        </div>
        <div className={css.wrapper}>
          <a href="#" className={css.link}>
            Category
          </a>
          <div className={css.admin}>
            <img src="" alt="" />
            by <a href="teacher-details.html">Cora Diaz</a>
          </div>
          <h2 className="course-one__title">
            <a href="course-details.html">Course Name</a>
          </h2>

          <div className="course-one__stars">
            <span className="course-one__stars-wrap">Stars</span>
            <span className="course-one__count">Mark</span>
            <span className="course-one__stars-count">Downloaded</span>
          </div>
          <div className="course-one__meta">
            <a href="course-details.html">
              <i className="far fa-clock"></i> ? Hours
            </a>
            <a href="course-details.html">
              <i className="far fa-folder-open"></i> ? Lectures
            </a>
            <a href="course-details.html">$??</a>
          </div>
          <a href="#" className="course-one__link">
            See Preview
          </a>
        </div>
      </li>
    </>
  );
};

export default CourseCardInCourses;
