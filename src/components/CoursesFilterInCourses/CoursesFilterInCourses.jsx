import css from "./CoursesFilterInCourses.module.scss";
import icons from "../../assets/images/icons/icons.svg";

const CoursesFilterInCourses = ({ curriculum = "curriculum" }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.heading}>{curriculum} </h2>
        <ul className={css.list}>
          <li className={css.item}>
            <h4 className={css.item_heading}>
              <svg className={css.icon}>
                <use href={icons + "#chevron-down"}></use>
              </svg>
              <span>الإبتدائية</span>
            </h4>
          </li>
          <li className={css.item}>
            <h4 className={css.item_heading}>
              <svg className={css.icon}>
                <use href={icons + "#chevron-down"}></use>
              </svg>
              <span>الإعدادية</span>
            </h4>
          </li>
          <li className={css.item}>
            <h4 className={css.item_heading}>
              <svg className={css.icon}>
                <use href={icons + "#chevron-down"}></use>
              </svg>
              <span>الثانوية</span>
            </h4>
          </li>
          <li className={css.item}>
            <h4 className={css.item_heading}>
              <svg className={css.icon}>
                <use href={icons + "#chevron-down"}></use>
              </svg>
              <span>الباكالوريا</span>
            </h4>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CoursesFilterInCourses;
