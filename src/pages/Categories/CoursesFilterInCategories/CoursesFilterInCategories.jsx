import css from "./CoursesFilterInCategories.module.scss";
import icons from "../../../assets/images/icons/icons.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useConditionalSpring } from "../../../utils";
import {
  CurriculaList,
  DateList,
  RatedList,
  TypeList,
} from "./CoursesFilterSublists";

const CoursesFilterInCategories = ({
  handleOptionSelect,
  handleOptionClear,
  filters,
}) => {
  const { t } = useTranslation();

  const [isFilterShown, setIsFilterShown] = useState(false);

  const toggleFilter = (e) => {
    if (e.target.closest("[data-target]")) {
      setIsFilterShown(!isFilterShown);
    }
  };

  const transition =
    useConditionalSpring.useConditionalListsTransition(isFilterShown);

  return (
    <section className={css.filter_section}>
      <div className={css.filter_container}>
        <ul
          className={`${css.list} ${isFilterShown ? css.not_empty : ""}`}
          onClick={toggleFilter}
        >
          {/* classification */}
          <li>
            <p className={css.item_inner} data-target="heading">
              <svg className={css.icon}>
                <use href={icons + "#filter"}></use>
              </svg>
              <span>
                {t("categories.search_classification_classification")}
              </span>
            </p>
          </li>
          {/* rated */}
          <li>
            <p className={css.item_inner} data-target="heading">
              <svg className={css.icon}>
                <use href={icons + "#star"}></use>
              </svg>
              <span>{t("categories.search_classification_rated")}</span>
            </p>

            {transition((style, item) => {
              return item ? (
                <RatedList
                  style={style}
                  handleOptionSelect={handleOptionSelect}
                  handleOptionClear={handleOptionClear}
                  filters={filters}
                />
              ) : null;
            })}
          </li>
          {/* curricula */}
          <li>
            <p className={css.item_inner} data-target="heading">
              <svg className={css.icon}>
                <use href={icons + "#clock"}></use>
              </svg>
              <span>{t("categories.search_classification_curricula")}</span>
            </p>

            {transition((style, item) => {
              return item ? (
                <CurriculaList
                  style={style}
                  handleOptionSelect={handleOptionSelect}
                  handleOptionClear={handleOptionClear}
                  filters={filters}
                />
              ) : null;
            })}
          </li>
          {/* Content type */}
          <li>
            <p className={css.item_inner} data-target="heading">
              <svg className={css.icon}>
                <use href={icons + "#play"}></use>
              </svg>
              <span>{t("categories.search_classification_content_type")}</span>
            </p>
            {transition((style, item) => {
              return item ? (
                <TypeList
                  style={style}
                  handleOptionSelect={handleOptionSelect}
                  handleOptionClear={handleOptionClear}
                  filters={filters}
                />
              ) : null;
            })}
          </li>

          {/* publishing date */}
          <li>
            <p className={css.item_inner} data-target="heading">
              <svg className={css.icon}>
                <use href={icons + "#calendar"}></use>
              </svg>
              <span>
                {t("categories.search_classification_publishing_date")}
              </span>
            </p>

            {transition((style, item) => {
              return item ? (
                <DateList
                  style={style}
                  handleOptionSelect={handleOptionSelect}
                  handleOptionClear={handleOptionClear}
                  filters={filters}
                />
              ) : null;
            })}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CoursesFilterInCategories;
