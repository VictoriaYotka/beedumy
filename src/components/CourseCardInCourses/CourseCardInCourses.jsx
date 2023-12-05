import { Link } from "react-router-dom";
import css from "./CourseCardInCourses.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import hero_image from "../../assets/images/home/hero/image.png";
import triangle_green_small from "../../assets/images/home/hero/triangle-green-small.png";

const CourseCardInCourses = ({
  course_image = hero_image,
  title,
  category,
  admin,
  admin_image = triangle_green_small,
  hours,
  downloaded,
  description,
}) => {
  return (
    <>
      <li className={css.item}>
        <div className={css.img_thumb}>
          <img className={css.image} src={course_image} alt={title} />
          <button className={css.favorite_button}>
            <svg className={css.icon}>
              <use href={icons + "#heart"}></use>
            </svg>
          </button>
        </div>
        <div className={css.wrapper}>
          <Link className={css.category}>{category}</Link>
          <div className={css.admin_wrapper}>
            <Link className={css.admin}>by {admin}</Link>
            <img className={css.admin_image} src={admin_image} alt={admin} />
          </div>
          <h2 className={css.title}>
            <Link>{title}</Link>
          </h2>

          <div className={css.meta}>
            <div className={css.hours_wrapper}>
              <span>{hours}</span>
              <svg className={css.meta_icon}>
                <use href={icons + "#clock"}></use>
              </svg>
            </div>
            <div className={css.downloaded_wrapper}>
              <span className={css.downloaded}>{downloaded}</span>
              <svg className={css.meta_icon}>
                <use href={icons + "#downloaded"}></use>
              </svg>
            </div>
            <p className={css.descr}> {description}</p>
          </div>
          <Link className={css.button}>See Preview</Link>
        </div>
      </li>
    </>
  );
};

export default CourseCardInCourses;
