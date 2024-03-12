import css from "./CoursesFilterInCategories.module.scss";
import icons from "../../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";
import { animated } from "@react-spring/web";

const CloseButton = ({ onClick }) => {
  return (
    <button className={css.close_button} onClick={onClick}>
      <svg className={css.close_icon}>
        <use href={icons + "#close"}></use>
      </svg>
    </button>
  );
};

const RatedList = ({
  style,
  handleOptionSelect,
  handleOptionClear,
  filters,
}) => {
  const { t } = useTranslation();

  return (
    <animated.ul
      className={css.subcategories_list}
      style={style}
      onClick={(e) => handleOptionSelect("rated", e)}
    >
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="top_selling"
            className={
              filters?.rated?.includes("top_selling") ? css.active : ""
            }
          >
            {t("categories.search_classification_rated_top_selling")}
          </span>

          {filters?.rated?.includes("top_selling") && (
            <CloseButton
              onClick={() => handleOptionClear("rated", "top_selling")}
            />
          )}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="highest_rating"
            className={
              filters?.rated?.includes("highest_rating") ? css.active : ""
            }
          >
            {t("categories.search_classification_rated_highest_rating")}
          </span>

          {filters?.rated?.includes("highest_rating") && (
            <CloseButton
              onClick={() => handleOptionClear("rated", "highest_rating")}
            />
          )}
        </p>
      </li>
    </animated.ul>
  );
};

const CurriculaList = ({
  style,
  handleOptionSelect,
  handleOptionClear,
  filters,
}) => {
  const { t } = useTranslation();

  return (
    <animated.ul
      className={css.subcategories_list}
      style={style}
      onClick={(e) => handleOptionSelect("curricula", e)}
    >
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="tunisian"
            className={
              filters?.curricula?.includes("tunisian") ? css.active : ""
            }
          >
            {t("categories.search_classification_curricula_tunisian")}
          </span>
          {filters?.curricula?.includes("tunisian") && (
            <CloseButton
              onClick={() => handleOptionClear("curricula", "tunisian")}
            />
          )}{" "}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="libyan"
            className={filters?.curricula?.includes("libyan") ? css.active : ""}
          >
            {t("categories.search_classification_curricula_libyan")}
          </span>

          {filters?.curricula?.includes("libyan") && (
            <CloseButton
              onClick={() => handleOptionClear("curricula", "libyan")}
            />
          )}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="formative"
            className={
              filters?.curricula?.includes("formative") ? css.active : ""
            }
          >
            {t("categories.search_classification_curricula_formative")}
          </span>

          {filters?.curricula?.includes("formative") && (
            <CloseButton
              onClick={() => handleOptionClear("curricula", "formative")}
            />
          )}
        </p>
      </li>
    </animated.ul>
  );
};

const TypeList = ({
  style,
  handleOptionSelect,
  handleOptionClear,
  filters,
}) => {
  const { t } = useTranslation();

  return (
    <animated.ul
      className={css.subcategories_list}
      style={style}
      onClick={(e) => handleOptionSelect("type", e)}
    >
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="available"
            className={filters?.type?.includes("available") ? css.active : ""}
          >
            {t("categories.search_classification_content_type_available")}
          </span>

          {filters?.type?.includes("available") && (
            <CloseButton
              onClick={() => handleOptionClear("type", "available")}
            />
          )}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="expected"
            className={filters?.type?.includes("expected") ? css.active : ""}
          >
            {t("categories.search_classification_content_type_expected")}
          </span>

          {filters?.type?.includes("expected") && (
            <CloseButton
              onClick={() => handleOptionClear("type", "expected")}
            />
          )}
        </p>
      </li>
    </animated.ul>
  );
};

const DateList = ({
  style,
  handleOptionSelect,
  handleOptionClear,
  filters,
}) => {
  const { t } = useTranslation();

  return (
    <animated.ul
      className={css.subcategories_list}
      style={style}
      onClick={(e) => handleOptionSelect("date", e)}
    >
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="hour"
            className={filters?.date?.includes("hour") ? css.active : ""}
          >
            {t("categories.search_classification_publishing_date_hour")}
          </span>

          {filters?.date?.includes("hour") && (
            <CloseButton onClick={() => handleOptionClear("date", "hour")} />
          )}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="day"
            className={filters?.date?.includes("day") ? css.active : ""}
          >
            {t("categories.search_classification_publishing_date_day")}
          </span>

          {filters?.date?.includes("day") && (
            <CloseButton onClick={() => handleOptionClear("date", "day")} />
          )}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="week"
            className={filters?.date?.includes("week") ? css.active : ""}
          >
            {t("categories.search_classification_publishing_date_week")}
          </span>

          {filters?.date?.includes("week") && (
            <CloseButton onClick={() => handleOptionClear("date", "week")} />
          )}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="month"
            className={filters?.date?.includes("month") ? css.active : ""}
          >
            {t("categories.search_classification_publishing_date_month")}
          </span>

          {filters?.date?.includes("month") && (
            <CloseButton onClick={() => handleOptionClear("date", "month")} />
          )}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="year"
            className={filters?.date?.includes("year") ? css.active : ""}
          >
            {t("categories.search_classification_publishing_date_year")}
          </span>

          {filters?.date?.includes("year") && (
            <CloseButton onClick={() => handleOptionClear("date", "year")} />
          )}
        </p>
      </li>
    </animated.ul>
  );
};

export { RatedList, CurriculaList, TypeList, DateList };
