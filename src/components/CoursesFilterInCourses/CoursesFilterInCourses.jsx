import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import css from "./CoursesFilterInCourses.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";

const CoursesFilterInCourses = ({ curriculum }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const [activeList, setActiveList] = useState(null);
  const [activeSubList, setActiveSubList] = useState([]);

  const openList = (level) => {
    if (activeList === level) {
      closeList();
    } else {
      setActiveList(level);
      setActiveSubList([]);
    }
  };

  const closeList = useCallback(() => {
    setActiveList(null);
    setActiveSubList([]);
  }, []);

  const toggleSubList = (name) => {
    setActiveSubList((previousState) => {
      if (previousState.includes(name)) {
        return previousState.filter((item) => item !== name);
      } else {
        return [...previousState, name];
      }
    });
  };

  useEffect(() => {
    const handlerClicks = (e) => {
      const item = e.target.closest("[data-item]");
      const subList = e.target.closest("[data-sublist]");

      if (e.type === "keydown" && e.key === "Escape") {
        closeList();
      }

      if (e.type === "click" && !subList && !item) {
        closeList();
      }
    };

    if (activeList) {
      window.addEventListener("click", handlerClicks);
      window.addEventListener("keydown", handlerClicks);
    }

    return () => {
      window.removeEventListener("click", handlerClicks);
      window.removeEventListener("keydown", handlerClicks);
    };
  }, [activeList, closeList]);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.heading}>{curriculum} </h2>
        <ul id="level_list" className={css.list}>
          {/* primary */}
          <li className={css.item}>
            <h4
              data-item="item"
              className={css.item_heading}
              onClick={() => openList("primary")}
            >
              <span>{t("courses_filter.courses_filter_primary")}</span>
              <svg
                className={
                  activeList === "primary"
                    ? `${css.icon} ${css.icon_active}`
                    : `${css.icon}`
                }
              >
                <use href={icons + "#chevron-down"}></use>
              </svg>
            </h4>

            {activeList === "primary" && (
              <ul data-sublist="sublist" className={css.sub_list}>
                <li className={css.sub_item}>
                  <p className={css.sub_item_heading}>
                    <span>{t("courses_filter.primary.first_year")}</span>
                    <svg className={css.sub_icon}>
                      <use href={icons + "#chevron-down"}></use>
                    </svg>
                  </p>
                </li>
                <li className={css.sub_item}>
                  <p className={css.sub_item_heading}>
                    <span>{t("courses_filter.primary.second_year")}</span>
                    <svg className={css.sub_icon}>
                      <use href={icons + "#chevron-down"}></use>
                    </svg>
                  </p>
                </li>
                <li className={css.sub_item}>
                  <p className={css.sub_item_heading}>
                    <span>{t("courses_filter.primary.third_year")}</span>
                    <svg className={css.sub_icon}>
                      <use href={icons + "#chevron-down"}></use>
                    </svg>
                  </p>
                </li>
                <li className={css.sub_item}>
                  <p className={css.sub_item_heading}>
                    <span>{t("courses_filter.primary.fourth_year")}</span>
                    <svg className={css.sub_icon}>
                      <use href={icons + "#chevron-down"}></use>
                    </svg>
                  </p>
                </li>
                <li className={css.sub_item}>
                  <p className={css.sub_item_heading}>
                    <span>{t("courses_filter.primary.fifth_year")}</span>
                    <svg className={css.sub_icon}>
                      <use href={icons + "#chevron-down"}></use>
                    </svg>
                  </p>
                </li>
                <li className={css.sub_item}>
                  <p className={css.sub_item_heading}>
                    <span>{t("courses_filter.primary.sixth_year")}</span>
                    <svg className={css.sub_icon}>
                      <use href={icons + "#chevron-down"}></use>
                    </svg>
                  </p>
                </li>
              </ul>
            )}
          </li>

          {/* middle */}
          <li className={css.item}>
            <h4
              data-item="item"
              className={css.item_heading}
              onClick={() => openList("middle")}
            >
              <span>{t("courses_filter.courses_filter_middle")}</span>
              <svg
                className={
                  activeList === "middle"
                    ? `${css.icon} ${css.icon_active}`
                    : `${css.icon}`
                }
              >
                <use href={icons + "#chevron-down"}></use>
              </svg>
            </h4>

            {activeList === "middle" &&
              location.pathname === "/courses-tunisian" && (
                <ul data-sublist="sublist" className={css.sub_list}>
                  <li className={css.sub_item}>
                    <p className={css.sub_item_heading}>
                      <span>
                        {t(
                          "courses_filter.middle_tunisian.seventh_year_essential"
                        )}
                      </span>
                      <svg className={css.sub_icon}>
                        <use href={icons + "#chevron-down"}></use>
                      </svg>
                    </p>
                  </li>
                  <li className={css.sub_item}>
                    <p className={css.sub_item_heading}>
                      <span>
                        {t(
                          "courses_filter.middle_tunisian.eighth_year_essential"
                        )}
                      </span>
                      <svg className={css.sub_icon}>
                        <use href={icons + "#chevron-down"}></use>
                      </svg>
                    </p>
                  </li>
                  <li className={css.sub_item}>
                    <p className={css.sub_item_heading}>
                      <span>
                        {t(
                          "courses_filter.middle_tunisian.ninth_year_essential"
                        )}
                      </span>
                      <svg className={css.sub_icon}>
                        <use href={icons + "#chevron-down"}></use>
                      </svg>
                    </p>
                  </li>
                </ul>
              )}

            {activeList === "middle" &&
              location.pathname === "/courses-libyan" && (
                <ul data-sublist="sublist" className={css.sub_list}>
                  <li className={css.sub_item}>
                    <p className={css.sub_item_heading}>
                      <span>
                        {t(
                          "courses_filter.middle_libyan.first_year_preparatory"
                        )}
                      </span>
                      <svg className={css.sub_icon}>
                        <use href={icons + "#chevron-down"}></use>
                      </svg>
                    </p>
                  </li>
                  <li className={css.sub_item}>
                    <p className={css.sub_item_heading}>
                      <span>
                        {t(
                          "courses_filter.middle_libyan.second_year_preparatory"
                        )}
                      </span>
                      <svg className={css.sub_icon}>
                        <use href={icons + "#chevron-down"}></use>
                      </svg>
                    </p>
                  </li>
                  <li className={css.sub_item}>
                    <p className={css.sub_item_heading}>
                      <span>
                        {t(
                          "courses_filter.middle_libyan.third_year_preparatory"
                        )}
                      </span>
                      <svg className={css.sub_icon}>
                        <use href={icons + "#chevron-down"}></use>
                      </svg>
                    </p>
                  </li>
                </ul>
              )}
          </li>

          {/* high */}
          <li className={css.item}>
            <h4
              data-item="item"
              className={css.item_heading}
              onClick={() => openList("high")}
            >
              <span>{t("courses_filter.courses_filter_high")}</span>
              <svg
                className={
                  activeList === "high"
                    ? `${css.icon} ${css.icon_active}`
                    : `${css.icon}`
                }
              >
                <use href={icons + "#chevron-down"}></use>
              </svg>
            </h4>

            {activeList === "high" && (
              <ul data-sublist="sublist" className={css.sub_list}>
                <li className={css.sub_item}>
                  <p className={css.sub_item_heading}>
                    <span>{t("courses_filter.high.first_year")}</span>
                    <svg className={css.sub_icon}>
                      <use href={icons + "#chevron-down"}></use>
                    </svg>
                  </p>
                </li>

                {/* second year */}
                <li
                  className={css.sub_item}
                  onClick={() => toggleSubList("second_year")}
                >
                  <p className={css.sub_item_heading}>
                    <span>{t("courses_filter.high.second_year")}</span>
                    <svg
                      // className={css.sub_icon_content}
                      className={
                        activeSubList.includes("second_year")
                          ? `${css.sub_icon_content} ${css.icon_active}`
                          : `${css.sub_icon_content}`
                      }
                    >
                      <use href={icons + "#chevron-down"}></use>
                    </svg>
                  </p>

                  {activeSubList.includes("second_year") &&
                    location.pathname === "/courses-tunisian" && (
                      <ul className={css.sub_sub_list}>
                        <li className={css.sub_item}>
                          <p className={css.sub_item_heading}>
                            <span>
                              {t(
                                "courses_filter.high_tunisian.second_year_etiquette"
                              )}
                            </span>
                            <svg className={css.sub_icon}>
                              <use href={icons + "#chevron-down"}></use>
                            </svg>
                          </p>
                        </li>
                        <li className={css.sub_item}>
                          <p className={css.sub_item_heading}>
                            <span>
                              {t(
                                "courses_filter.high_tunisian.second_year_informational"
                              )}
                            </span>
                            <svg className={css.sub_icon}>
                              <use href={icons + "#chevron-down"}></use>
                            </svg>
                          </p>
                        </li>
                        <li className={css.sub_item}>
                          <p className={css.sub_item_heading}>
                            <span>
                              {t(
                                "courses_filter.high_tunisian.second_year_experimental_science"
                              )}
                            </span>
                            <svg className={css.sub_icon}>
                              <use href={icons + "#chevron-down"}></use>
                            </svg>
                          </p>
                        </li>
                        <li className={css.sub_item}>
                          <p className={css.sub_item_heading}>
                            <span>
                              {t(
                                "courses_filter.high_tunisian.second_year_economics"
                              )}
                            </span>
                            <svg className={css.sub_icon}>
                              <use href={icons + "#chevron-down"}></use>
                            </svg>
                          </p>
                        </li>
                      </ul>
                    )}

                  {activeSubList.includes("second_year") &&
                    location.pathname === "/courses-libyan" && (
                      <ul className={css.sub_sub_list}>
                        <li className={css.sub_item}>
                          <p className={css.sub_item_heading}>
                            <span>
                              {t(
                                "courses_filter.high_libyan.second_year_scientific"
                              )}
                            </span>
                            <svg className={css.sub_icon}>
                              <use href={icons + "#chevron-down"}></use>
                            </svg>
                          </p>
                        </li>
                        <li className={css.sub_item}>
                          <p className={css.sub_item_heading}>
                            <span>
                              {t(
                                "courses_filter.high_libyan.second_year_literary"
                              )}
                            </span>
                            <svg className={css.sub_icon}>
                              <use href={icons + "#chevron-down"}></use>
                            </svg>
                          </p>
                        </li>
                      </ul>
                    )}
                </li>

                {/* third year */}
                <li
                  className={css.sub_item}
                  onClick={() => toggleSubList("third_year")}
                >
                  <p className={css.sub_item_heading}>
                    <span>{t("courses_filter.high.third_year")}</span>
                    <svg
                      className={
                        activeSubList.includes("third_year")
                          ? `${css.sub_icon_content} ${css.icon_active}`
                          : `${css.sub_icon_content}`
                      }
                    >
                      <use href={icons + "#chevron-down"}></use>
                    </svg>
                  </p>

                  {activeSubList.includes("third_year") &&
                    location.pathname === "/courses-tunisian" && (
                      <ul className={css.sub_sub_list}>
                        <li className={css.sub_item}>
                          <p className={css.sub_item_heading}>
                            <span>
                              {t(
                                "courses_filter.high_tunisian.third_year_etiquette"
                              )}
                            </span>
                            <svg className={css.sub_icon}>
                              <use href={icons + "#chevron-down"}></use>
                            </svg>
                          </p>
                        </li>
                        <li className={css.sub_item}>
                          <p className={css.sub_item_heading}>
                            <span>
                              {t(
                                "courses_filter.high_tunisian.third_year_sports"
                              )}
                            </span>
                            <svg className={css.sub_icon}>
                              <use href={icons + "#chevron-down"}></use>
                            </svg>
                          </p>
                        </li>
                        <li className={css.sub_item}>
                          <p className={css.sub_item_heading}>
                            <span>
                              {t(
                                "courses_filter.high_tunisian.third_year_experimental_science"
                              )}
                            </span>
                            <svg className={css.sub_icon}>
                              <use href={icons + "#chevron-down"}></use>
                            </svg>
                          </p>
                        </li>
                        <li className={css.sub_item}>
                          <p className={css.sub_item_heading}>
                            <span>
                              {t(
                                "courses_filter.high_tunisian.third_year_economics"
                              )}
                            </span>
                            <svg className={css.sub_icon}>
                              <use href={icons + "#chevron-down"}></use>
                            </svg>
                          </p>
                        </li>
                        <li className={css.sub_item}>
                          <p className={css.sub_item_heading}>
                            <span>
                              {t(
                                "courses_filter.high_tunisian.third_year_informational"
                              )}
                            </span>
                            <svg className={css.sub_icon}>
                              <use href={icons + "#chevron-down"}></use>
                            </svg>
                          </p>
                        </li>
                        <li className={css.sub_item}>
                          <p className={css.sub_item_heading}>
                            <span>
                              {t(
                                "courses_filter.high_tunisian.third_year_mathematics"
                              )}
                            </span>
                            <svg className={css.sub_icon}>
                              <use href={icons + "#chevron-down"}></use>
                            </svg>
                          </p>
                        </li>
                        <li className={css.sub_item}>
                          <p className={css.sub_item_heading}>
                            <span>
                              {t(
                                "courses_filter.high_tunisian.third_year_technical"
                              )}
                            </span>
                            <svg className={css.sub_icon}>
                              <use href={icons + "#chevron-down"}></use>
                            </svg>
                          </p>
                        </li>
                      </ul>
                    )}

                  {activeSubList.includes("third_year") &&
                    location.pathname === "/courses-libyan" && (
                      <ul className={css.sub_sub_list}>
                        <li className={css.sub_item}>
                          <p className={css.sub_item_heading}>
                            <span>
                              {t(
                                "courses_filter.high_libyan.third_year_scientific"
                              )}
                            </span>
                            <svg className={css.sub_icon}>
                              <use href={icons + "#chevron-down"}></use>
                            </svg>
                          </p>
                        </li>
                        <li className={css.sub_item}>
                          <p className={css.sub_item_heading}>
                            <span>
                              {t(
                                "courses_filter.high_libyan.third_year_literary"
                              )}
                            </span>
                            <svg className={css.sub_icon}>
                              <use href={icons + "#chevron-down"}></use>
                            </svg>
                          </p>
                        </li>
                      </ul>
                    )}
                </li>
              </ul>
            )}
          </li>

          {/* bachelor */}
          {location.pathname === "/courses-tunisian" && (
            <li className={css.item}>
              <h4
                data-item="item"
                className={css.item_heading}
                onClick={() => openList("bachelor")}
              >
                <span>{t("courses_filter.courses_filter_bachelor")}</span>
                <svg
                  className={
                    activeList === "bachelor"
                      ? `${css.icon} ${css.icon_active}`
                      : `${css.icon}`
                  }
                >
                  <use href={icons + "#chevron-down"}></use>
                </svg>
              </h4>

              {activeList === "bachelor" && (
                <ul data-sublist="sublist" className={css.sub_list}>
                  <li className={css.sub_item}>
                    <p className={css.sub_item_heading}>
                      <span>{t("courses_filter.bachelor_tunisian.arts")}</span>
                      <svg className={css.sub_icon}>
                        <use href={icons + "#chevron-down"}></use>
                      </svg>
                    </p>
                  </li>
                  <li className={css.sub_item}>
                    <p className={css.sub_item_heading}>
                      <span>
                        {t("courses_filter.bachelor_tunisian.technical")}
                      </span>
                      <svg className={css.sub_icon}>
                        <use href={icons + "#chevron-down"}></use>
                      </svg>
                    </p>
                  </li>
                  <li className={css.sub_item}>
                    <p className={css.sub_item_heading}>
                      <span>
                        {t("courses_filter.bachelor_tunisian.mathematics")}
                      </span>
                      <svg className={css.sub_icon}>
                        <use href={icons + "#chevron-down"}></use>
                      </svg>
                    </p>
                  </li>
                  <li className={css.sub_item}>
                    <p className={css.sub_item_heading}>
                      <span>
                        {t(
                          "courses_filter.bachelor_tunisian.experimental_science"
                        )}
                      </span>
                      <svg className={css.sub_icon}>
                        <use href={icons + "#chevron-down"}></use>
                      </svg>
                    </p>
                  </li>
                  <li className={css.sub_item}>
                    <p className={css.sub_item_heading}>
                      <span>{t("courses_filter.bachelor_tunisian.media")}</span>
                      <svg className={css.sub_icon}>
                        <use href={icons + "#chevron-down"}></use>
                      </svg>
                    </p>
                  </li>
                  <li className={css.sub_item}>
                    <p className={css.sub_item_heading}>
                      <span>
                        {t(
                          "courses_filter.bachelor_tunisian.economics_management"
                        )}
                      </span>
                      <svg className={css.sub_icon}>
                        <use href={icons + "#chevron-down"}></use>
                      </svg>
                    </p>
                  </li>
                </ul>
              )}
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default CoursesFilterInCourses;
