import css from "./CoursesFilterInCategories.module.scss";
import icons from "../../../assets/images/icons/icons.svg";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CoursesFilterInCategories = () => {
  const { t } = useTranslation();

  const [isDateList, setIsDateList] = useState(
    document.body.offsetWidth >= 768 ? true : false
  );
  const [isTypeList, setIsTypeList] = useState(
    document.body.offsetWidth >= 768 ? true : false
  );
  const [isCurriculaList, setIsCurriculaList] = useState(
    document.body.offsetWidth >= 768 ? true : false
  );
  const [isRatedList, setisRatedList] = useState(
    document.body.offsetWidth >= 768 ? true : false
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleShow = (category) => {
    switch (category) {
      case "date_list":
        setIsDateList(true);
        setIsTypeList(false);
        setIsCurriculaList(false);
        setisRatedList(false);
        break;
      case "type_list":
        setIsDateList(false);
        setIsTypeList(true);
        setIsCurriculaList(false);
        setisRatedList(false);
        break;
      case "curricula_list":
        setIsDateList(false);
        setIsTypeList(false);
        setIsCurriculaList(true);
        setisRatedList(false);
        break;
      case "rated_list":
        setIsDateList(false);
        setIsTypeList(false);
        setIsCurriculaList(false);
        setisRatedList(true);
        break;
      default:
        setIsDateList(false);
        setIsTypeList(false);
        setIsCurriculaList(false);
        setisRatedList(false);
    }
  };

  useEffect(() => {
    const updateMedia = () => {
      if (document.body.offsetWidth >= 768) {
        setIsDateList(true);
        setIsTypeList(true);
        setIsCurriculaList(true);
        setisRatedList(true);
      }
      if (document.body.offsetWidth < 768) {
        setIsDateList(false);
        setIsTypeList(false);
        setIsCurriculaList(false);
        setisRatedList(false);
      }
    };

    window.addEventListener("resize", updateMedia);

    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  });

  return (
    <>
      <section className={css.search_section}>
        <div className={css.search_container}>
          <form className={css.form} onSubmit={handleSubmit}>
            <div className={css.input_wrapper}>
              <svg className={css.input_icon}>
                <use href={icons + "#search"}></use>
              </svg>
              <input
                className={css.input}
                type="text"
                placeholder={t("categories.search_input_placeholder")}
              />
            </div>
            <button className={css.form_button}>
              <p className={css.button_text}>
                {t("categories.search_classification")}
              </p>
              <svg className={css.button_icon}>
                <use href={icons + "#filter"}></use>
              </svg>
            </button>
          </form>
        </div>
      </section>

      <section className={css.filter_section}>
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
            <li onClick={() => handleShow("rated_list")}>
              <p className={css.item_inner}>
                <svg className={css.icon}>
                  <use href={icons + "#star"}></use>
                </svg>
                <span>{t("categories.search_classification_rated")}</span>
              </p>
              {(isRatedList || document.body.offsetWidth >= 768) && (
                <ul className={css.subcategories_list}>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>
                      {t("categories.search_classification_rated_top_selling")}
                    </p>
                  </li>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>
                      {t(
                        "categories.search_classification_rated_highest_rating"
                      )}
                    </p>
                  </li>
                </ul>
              )}
            </li>
            {/* Curricula */}
            <li onClick={() => handleShow("curricula_list")}>
              <p className={css.item_inner}>
                <svg className={css.icon}>
                  <use href={icons + "#clock"}></use>
                </svg>
                <span>{t("categories.search_classification_curricula")}</span>
              </p>

              {(isCurriculaList || document.body.offsetWidth >= 768) && (
                <ul className={css.subcategories_list}>
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
                      {t(
                        "categories.search_classification_curricula_formative"
                      )}
                    </p>
                  </li>
                </ul>
              )}
            </li>
            {/* Content type */}
            <li onClick={() => handleShow("type_list")}>
              <p className={css.item_inner}>
                <svg className={css.icon}>
                  <use href={icons + "#play"}></use>
                </svg>
                <span>
                  {t("categories.search_classification_content_type")}
                </span>
              </p>
              {(isTypeList || document.body.offsetWidth >= 768) && (
                <ul className={css.subcategories_list}>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>
                      {t(
                        "categories.search_classification_content_type_available"
                      )}
                    </p>
                  </li>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>
                      {t(
                        "categories.search_classification_content_type_expected"
                      )}
                    </p>
                  </li>
                </ul>
              )}
            </li>

            {/* publishing date */}
            <li onClick={() => handleShow("date_list")}>
              <p className={css.item_inner}>
                <svg className={css.icon}>
                  <use href={icons + "#calendar"}></use>
                </svg>
                <span>
                  {t("categories.search_classification_publishing_date")}
                </span>
              </p>

              {(isDateList || document.body.offsetWidth >= 768) && (
                <ul className={css.subcategories_list}>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>
                      {t(
                        "categories.search_classification_publishing_date_hour"
                      )}
                    </p>
                  </li>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>
                      {t(
                        "categories.search_classification_publishing_date_day"
                      )}
                    </p>
                  </li>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>
                      {t(
                        "categories.search_classification_publishing_date_week"
                      )}
                    </p>
                  </li>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>
                      {t(
                        "categories.search_classification_publishing_date_month"
                      )}
                    </p>
                  </li>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>
                      {t(
                        "categories.search_classification_publishing_date_year"
                      )}
                    </p>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CoursesFilterInCategories;
