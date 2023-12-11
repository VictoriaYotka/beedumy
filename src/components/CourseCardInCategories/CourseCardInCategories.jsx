import css from "./CourseCardInCategories.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import { Link } from "react-router-dom";

const CourseCardInCategories = ({
  notion,
  img,
  imgAlt,
  preheader,
  header,
  rating,
  descr,
  id,
}) => {
  return (
    <div className={css.item}>
      <div className={css.img_thumb}>
        <p className={css.notion}>{notion}</p>
        <img src={img} alt={imgAlt} loading="lazy" className={css.image} />
      </div>
      <div className={css.info_thumb}>
        <h4 className={css.preheader}>{preheader}</h4>
        <h3 className={css.header}>{header}</h3>
        <div className={css.wrapper}>
          <p className={css.descr}>{descr}</p>
          <div className={css.rating}>{rating}</div>
        </div>
        <Link to="/courses/course" className={css.course_button}>
          <svg className={css.icon}>
            <use href={`${icons}#play`}></use>
          </svg>
          <span>Go to course</span>
        </Link>
      </div>
    </div>
  );
};

export default CourseCardInCategories;
