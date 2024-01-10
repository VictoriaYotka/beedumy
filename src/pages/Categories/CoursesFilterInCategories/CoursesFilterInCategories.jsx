import css from "./CoursesFilterInCategories.module.scss";
import icons from "../../../assets/images/icons/icons.svg";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { animated } from "@react-spring/web";
import { useConditionalTransition } from "../../../utils";

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
  selectedOption,
}) => {
  const { t } = useTranslation();

  return (
    <animated.ul
      className={css.subcategories_list}
      style={style}
      onClick={(e) => handleOptionSelect("rated_list", e)}
    >
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="top_selling"
            className={selectedOption === "top_selling" ? css.active : ""}
          >
            {t("categories.search_classification_rated_top_selling")}
          </span>

          {selectedOption === "top_selling" && (
            <CloseButton onClick={() => handleOptionClear("rated_list")} />
          )}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="highest_rating"
            className={selectedOption === "highest_rating" ? css.active : ""}
          >
            {t("categories.search_classification_rated_highest_rating")}
          </span>

          {selectedOption === "highest_rating" && (
            <CloseButton onClick={() => handleOptionClear("rated_list")} />
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
  selectedOption,
}) => {
  const { t } = useTranslation();

  return (
    <animated.ul
      className={css.subcategories_list}
      style={style}
      onClick={(e) => handleOptionSelect("curricula_list", e)}
    >
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="tunisian"
            className={selectedOption === "tunisian" ? css.active : ""}
          >
            {t("categories.search_classification_curricula_tunisian")}
          </span>
          {selectedOption === "tunisian" && (
            <CloseButton onClick={() => handleOptionClear("rated_list")} />
          )}{" "}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="libyan"
            className={selectedOption === "libyan" ? css.active : ""}
          >
            {t("categories.search_classification_curricula_libyan")}
          </span>

          {selectedOption === "libyan" && (
            <CloseButton onClick={() => handleOptionClear("rated_list")} />
          )}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="formative"
            className={selectedOption === "formative" ? css.active : ""}
          >
            {t("categories.search_classification_curricula_formative")}
          </span>

          {selectedOption === "formative" && (
            <CloseButton onClick={() => handleOptionClear("rated_list")} />
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
  selectedOption,
}) => {
  const { t } = useTranslation();

  return (
    <animated.ul
      className={css.subcategories_list}
      style={style}
      onClick={(e) => handleOptionSelect("type_list", e)}
    >
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="available"
            className={selectedOption === "available" ? css.active : ""}
          >
            {t("categories.search_classification_content_type_available")}
          </span>

          {selectedOption === "available" && (
            <CloseButton onClick={() => handleOptionClear("rated_list")} />
          )}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="expected"
            className={selectedOption === "expected" ? css.active : ""}
          >
            {t("categories.search_classification_content_type_expected")}
          </span>

          {selectedOption === "expected" && (
            <CloseButton onClick={() => handleOptionClear("rated_list")} />
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
  selectedOption,
}) => {
  const { t } = useTranslation();

  return (
    <animated.ul
      className={css.subcategories_list}
      style={style}
      onClick={(e) => handleOptionSelect("date_list", e)}
    >
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="hour"
            className={selectedOption === "hour" ? css.active : ""}
          >
            {t("categories.search_classification_publishing_date_hour")}
          </span>

          {selectedOption === "hour" && (
            <CloseButton onClick={() => handleOptionClear("rated_list")} />
          )}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="day"
            className={selectedOption === "day" ? css.active : ""}
          >
            {t("categories.search_classification_publishing_date_day")}
          </span>

          {selectedOption === "day" && (
            <CloseButton onClick={() => handleOptionClear("rated_list")} />
          )}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="week"
            className={selectedOption === "week" ? css.active : ""}
          >
            {t("categories.search_classification_publishing_date_week")}
          </span>

          {selectedOption === "week" && (
            <CloseButton onClick={() => handleOptionClear("rated_list")} />
          )}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="month"
            className={selectedOption === "month" ? css.active : ""}
          >
            {t("categories.search_classification_publishing_date_month")}
          </span>

          {selectedOption === "month" && (
            <CloseButton onClick={() => handleOptionClear("rated_list")} />
          )}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_inner}>
          <span
            data-option="year"
            className={selectedOption === "year" ? css.active : ""}
          >
            {t("categories.search_classification_publishing_date_year")}
          </span>

          {selectedOption === "year" && (
            <CloseButton onClick={() => handleOptionClear("rated_list")} />
          )}
        </p>
      </li>
    </animated.ul>
  );
};

const CoursesFilterInCategories = ({ style }) => {
  const { t } = useTranslation();

  const [lists, setLists] = useState(
    window.innerWidth >= 768
      ? ["rated_list", "curricula_list", "type_list", "date_list"]
      : []
  );

  const [ratedFilter, setRatedFilter] = useState("");
  const [curriculaFilter, setCurriculaFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const handleShow = (category) => {
    if (window.innerWidth < 768) {
      setLists((prevLists) => {
        if (prevLists.includes(category)) {
          return prevLists.filter((item) => item !== category);
        } else {
          return [...prevLists, category];
        }
      });
    }
  };

  const handleOptionSelect = (category, e) => {
    if (e.target.dataset.option) {
      const option = e.target.dataset.option;

      switch (category) {
        case "rated_list":
          setRatedFilter(option);
          break;
        case "curricula_list":
          setCurriculaFilter(option);
          break;
        case "type_list":
          setTypeFilter(option);
          break;
        case "date_list":
          setDateFilter(option);
          break;
        default:
          break;
      }
    }
  };

  const handleOptionClear = (category) => {
    switch (category) {
      case "rated_list":
        setRatedFilter("");
        break;
      case "curricula_list":
        setCurriculaFilter("");
        break;
      case "type_list":
        setTypeFilter("");
        break;
      case "date_list":
        setDateFilter("");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const updateMedia = () => {
      if (document.body.offsetWidth >= 768) {
        setLists(["rated_list", "curricula_list", "type_list", "date_list"]);
      } else {
        setLists([]);
      }
    };

    window.addEventListener("resize", updateMedia);

    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  }, []);

  const transition =
    useConditionalTransition.useConditionalListsTransition(lists);

  return (
    <animated.section className={css.filter_section} style={style}>
      <div className={css.filter_container}>
        <ul className={css.list}>
          {/* classification */}
          <li className={css.empty_item}>
            <p className={css.item_inner}>
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
            <p
              className={css.item_inner}
              onClick={() => handleShow("rated_list")}
            >
              <svg className={css.icon}>
                <use href={icons + "#star"}></use>
              </svg>
              <span>{t("categories.search_classification_rated")}</span>
            </p>

            {transition((style, item) => {
              switch (item) {
                case "rated_list":
                  return (
                    <RatedList
                      style={style}
                      handleOptionSelect={handleOptionSelect}
                      handleOptionClear={() => handleOptionClear("rated_list")}
                      selectedOption={ratedFilter}
                    />
                  );
                default:
                  return null;
              }
            })}
          </li>
          {/* curricula */}
          <li>
            <p
              className={css.item_inner}
              onClick={() => handleShow("curricula_list")}
            >
              <svg className={css.icon}>
                <use href={icons + "#clock"}></use>
              </svg>
              <span>{t("categories.search_classification_curricula")}</span>
            </p>

            {transition((style, item) => {
              switch (item) {
                case "curricula_list":
                  return (
                    <CurriculaList
                      style={style}
                      handleOptionSelect={handleOptionSelect}
                      handleOptionClear={() =>
                        handleOptionClear("curricula_list")
                      }
                      selectedOption={curriculaFilter}
                    />
                  );
                default:
                  return null;
              }
            })}
          </li>
          {/* Content type */}
          <li>
            <p
              className={css.item_inner}
              onClick={() => handleShow("type_list")}
            >
              <svg className={css.icon}>
                <use href={icons + "#play"}></use>
              </svg>
              <span>{t("categories.search_classification_content_type")}</span>
            </p>
            {transition((style, item) => {
              switch (item) {
                case "type_list":
                  return (
                    <TypeList
                      style={style}
                      handleOptionSelect={handleOptionSelect}
                      handleOptionClear={() => handleOptionClear("type_list")}
                      selectedOption={typeFilter}
                    />
                  );
                default:
                  return null;
              }
            })}
          </li>

          {/* publishing date */}
          <li>
            <p
              className={css.item_inner}
              onClick={() => handleShow("date_list")}
            >
              <svg className={css.icon}>
                <use href={icons + "#calendar"}></use>
              </svg>
              <span>
                {t("categories.search_classification_publishing_date")}
              </span>
            </p>

            {transition((style, item) => {
              switch (item) {
                case "date_list":
                  return (
                    <DateList
                      style={style}
                      handleOptionSelect={handleOptionSelect}
                      handleOptionClear={() => handleOptionClear("date_list")}
                      selectedOption={dateFilter}
                    />
                  );
                default:
                  return null;
              }
            })}
          </li>
        </ul>
      </div>
    </animated.section>
  );
};

export default CoursesFilterInCategories;
