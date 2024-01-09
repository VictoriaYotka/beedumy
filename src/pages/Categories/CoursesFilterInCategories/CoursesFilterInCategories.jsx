import css from "./CoursesFilterInCategories.module.scss";
import icons from "../../../assets/images/icons/icons.svg";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { animated } from "@react-spring/web";
import { useConditionalListsTransition } from "../../../utils";

const RatedList = ({ style }) => {
  const { t } = useTranslation();

  return (
    <animated.ul className={css.subcategories_list} style={style}>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_heading}>
          {t("categories.search_classification_rated_top_selling")}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_heading}>
          {t("categories.search_classification_rated_highest_rating")}
        </p>
      </li>
    </animated.ul>
  );
};

const CurriculaList = ({ style }) => {
  const { t } = useTranslation();

  return (
    <animated.ul className={css.subcategories_list} style={style}>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_heading}>
          {t("categories.search_classification_curricula_tunisian")}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_heading}>
          {t("categories.search_classification_curricula_libyan")}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_heading}>
          {t("categories.search_classification_curricula_formative")}
        </p>
      </li>
    </animated.ul>
  );
};

const TypeList = ({ style }) => {
  const { t } = useTranslation();

  return (
    <animated.ul className={css.subcategories_list} style={style}>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_heading}>
          {t("categories.search_classification_content_type_available")}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_heading}>
          {t("categories.search_classification_content_type_expected")}
        </p>
      </li>
    </animated.ul>
  );
};

const DateList = ({ style }) => {
  const { t } = useTranslation();

  return (
    <animated.ul className={css.subcategories_list} style={style}>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_heading}>
          {t("categories.search_classification_publishing_date_hour")}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_heading}>
          {t("categories.search_classification_publishing_date_day")}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_heading}>
          {t("categories.search_classification_publishing_date_week")}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_heading}>
          {t("categories.search_classification_publishing_date_month")}
        </p>
      </li>
      <li className={css.subcategories_item}>
        <p className={css.subcategories_heading}>
          {t("categories.search_classification_publishing_date_year")}
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

  const transition = useConditionalListsTransition(lists);

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
                  return <RatedList style={style} />;
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
                  return <CurriculaList style={style} />;
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
                  return <TypeList style={style} />;
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
                  return <DateList style={style} />;
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
