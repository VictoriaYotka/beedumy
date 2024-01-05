import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import css from "./CoursesFilterInCourses.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";
import { useTransition } from "@react-spring/web";
import {
  BachelorList,
  HighList,
  MiddleLibyanList,
  MiddleTunisianList,
  PrimaryList,
} from "./CoursesFilterSubLists";

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

  const transition = useTransition(activeList, {
    from: { opacity: 0, transform: "translateY(-20px)" },
    enter: {
      opacity: 1,
      transform: "translateY(0)",
    },
    leave: {
      opacity: 0,
      transform: "translateY(-20px)",
    },
  });

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

            {transition((style, item) => {
              switch (item) {
                case "primary":
                  return <PrimaryList style={style} />;
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
                    case "/courses-tunisian":
                      return <MiddleTunisianList style={style} />;
                    case "/courses-libyan":
                      return <MiddleLibyanList style={style} />;
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
                    />
                  );
                default:
                  return null;
              }
            })}
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

              {transition((style, item) => {
                switch (item) {
                  case "bachelor":
                    return <BachelorList style={style} />;
                  default:
                    return null;
                }
              })}
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default CoursesFilterInCourses;
