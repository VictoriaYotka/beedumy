import css from "./CoursesFilterInCourses.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";

const CoursesFilterInCourses = ({ curriculum }) => {
  const { t } = useTranslation();

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.heading}>{curriculum} </h2>
        <ul className={css.list}>
          <li className={css.item}>
            <h4 className={css.item_heading}>
              <span>{t("courses_filter.courses_filter_primary")}</span>
              <svg className={css.icon}>
                <use href={icons + "#chevron-down"}></use>
              </svg>
            </h4>
            <ul className={css.sub_list}>
              <li className={css.sub_item}>
                <p>{t("courses_filter.primary.first_year")}</p>
                <svg className={css.icon}>
                  <use href={icons + "#chevron-down"}></use>
                </svg>
              </li>
            </ul>
          </li>
          <li className={css.item}>
            <h4 className={css.item_heading}>
              <span>{t("courses_filter.courses_filter_middle")}</span>
              <svg className={css.icon}>
                <use href={icons + "#chevron-down"}></use>
              </svg>
            </h4>
          </li>
          <li className={css.item}>
            <h4 className={css.item_heading}>
              <span>{t("courses_filter.courses_filter_high")}</span>
              <svg className={css.icon}>
                <use href={icons + "#chevron-down"}></use>
              </svg>
            </h4>
          </li>
          <li className={css.item}>
            <h4 className={css.item_heading}>
              <span>{t("courses_filter.courses_filter_bachelor")}</span>
              <svg className={css.icon}>
                <use href={icons + "#chevron-down"}></use>
              </svg>
            </h4>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CoursesFilterInCourses;
