import { Link } from "react-router-dom";
import css from "./CourseCardInCourses.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import hero_image_sm from "../../assets/images/home/hero/image_sm.webp";
import triangle_green_little_sm from "../../assets/images/home/hero/triangle-green-little_sm.webp";
import SectionAnimationWrapper from "../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const CourseCardInCourses = ({
  course_image = hero_image_sm,
  title,
  category,
  admin,
  admin_image = triangle_green_little_sm,
  hours,
  downloaded,
  description,
}) => {
  return (
    <li className={css.item}>
      <SectionAnimationWrapper>
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
            <img className={css.admin_image} src={admin_image} alt={admin} />
            <Link className={css.admin}>by {admin}</Link>
          </div>
          <h2 className={css.title}>
            <Link>{title}</Link>
          </h2>

          <div className={css.meta}>
            <p className={css.descr}> {description}</p>
            <div className={css.downloaded_wrapper}>
              <svg className={css.meta_icon}>
                <use href={icons + "#downloaded"}></use>
              </svg>
              <span className={css.downloaded}>{downloaded}</span>
            </div>
            <div className={css.hours_wrapper}>
              <svg className={css.meta_icon}>
                <use href={icons + "#clock"}></use>
              </svg>
              <span>{hours}</span>
            </div>
          </div>
          <Link to="/courses/course" className={css.button}>
            See Preview
          </Link>
        </div>
      </SectionAnimationWrapper>
    </li>
  );
};

export default CourseCardInCourses;
