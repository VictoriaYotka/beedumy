import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import css from "./CoursesFilterInCourses.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";
import {
  BachelorList,
  HighList,
  MiddleLibyanList,
  MiddleTunisianList,
  PrimaryList,
} from "./CoursesFilterSubLists";
import { useConditionalSpring } from "../../utils";

const CoursesFilterInCourses = ({ curricula }) => {
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

  const transition =
    useConditionalSpring.useConditionalListsTransition(activeList);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.heading}>{curricula} </h2>

        {(location.pathname === "/categories/tunisian" ||
          location.pathname === "/categories/libyan") && (
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

              {transition((style, item) => {
                switch (item) {
                  case "primary":
                    return <PrimaryList style={style} key="primary" />;
                  default:
                    return null;
                }
              })}
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

              {transition((style, item) => {
                switch (item) {
                  case "middle":
                    switch (location.pathname) {
                      case "/categories/tunisian":
                        return (
                          <MiddleTunisianList
                            style={style}
                            key="middle_tunisian"
                          />
                        );
                      case "/categories/libyan":
                        return (
                          <MiddleLibyanList style={style} key="middle_libyan" />
                        );
                      default:
                        return null;
                    }
                  default:
                    return null;
                }
              })}
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

              {transition((style, item) => {
                switch (item) {
                  case "high":
                    return (
                      <HighList
                        style={style}
                        toggleSubList={toggleSubList}
                        activeSubList={activeSubList}
                        key="high"
                      />
                    );
                  default:
                    return null;
                }
              })}
            </li>

            {/* bachelor */}
            {location.pathname === "/categories/tunisian" && (
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

                {transition((style, item) => {
                  switch (item) {
                    case "bachelor":
                      return <BachelorList style={style} key="bachelor" />;
                    default:
                      return null;
                  }
                })}
              </li>
            )}
          </ul>
        )}
      </div>
    </section>
  );
};

export default CoursesFilterInCourses;
