import css from "./CoursesFilterInCategories.module.scss";
import icons from "../../../assets/images/icons/icons.svg";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { animated } from "@react-spring/web";
import { useConditionalSpring } from "../../../utils";
import {
  CurriculaList,
  DateList,
  RatedList,
  TypeList,
} from "./CoursesFilterSublists";

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

  const transition = useConditionalSpring.useConditionalListsTransition(lists);

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
