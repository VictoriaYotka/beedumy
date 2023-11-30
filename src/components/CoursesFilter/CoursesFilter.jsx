import css from "./CoursesFilter.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import { useEffect, useState } from "react";

const CoursesFilter = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(
    document.body.offsetWidth >= 768
  );
  const [isDateList, setIsDateList] = useState(isMediumScreen ? true : false);
  const [isTypeList, setIsTypeList] = useState(isMediumScreen ? true : false);
  const [isCurriculaList, setIsCurriculaList] = useState(
    isMediumScreen ? true : false
  );
  const [isFavoriteList, setIsFavoriteList] = useState(
    isMediumScreen ? true : false
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
        setIsFavoriteList(false);
        break;
      case "type_list":
        setIsDateList(false);
        setIsTypeList(true);
        setIsCurriculaList(false);
        setIsFavoriteList(false);
        break;
      case "curricula_list":
        setIsDateList(false);
        setIsTypeList(false);
        setIsCurriculaList(true);
        setIsFavoriteList(false);
        break;
      case "favorite_list":
        setIsDateList(false);
        setIsTypeList(false);
        setIsCurriculaList(false);
        setIsFavoriteList(true);
        break;
      default:
        setIsDateList(false);
        setIsTypeList(false);
        setIsCurriculaList(false);
        setIsFavoriteList(false);
    }
  };

  const updateMedia = () => {
    setIsMediumScreen(document.body.offsetWidth >= 768);
    if (isMediumScreen) {
      setIsDateList(true);
      setIsTypeList(true);
      setIsCurriculaList(true);
      setIsFavoriteList(true);
    }
    if (!isMediumScreen) {
      setIsDateList(false);
      setIsTypeList(false);
      setIsCurriculaList(false);
      setIsFavoriteList(false);
    }
  };

  useEffect(() => {
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
                placeholder="أبحث عن محتوى معين من خلال اسم المحتوى أو من يقدمه"
              />
            </div>
            <button className={css.form_button}>
              <p className={css.button_text}>تصنيف</p>
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
            {/* publishing date */}
            <li id="item_date" className={css.item}>
              <p
                className={css.item_heading}
                onClick={() => handleShow("date_list")}
              >
                تاريخ نشر المحتوى
                <svg className={css.icon}>
                  <use href={icons + "#calendar"}></use>
                </svg>
              </p>

              {(isDateList || isMediumScreen) && (
                <ul className={css.subcategories_list}>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>منذ ساعة</p>
                  </li>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>اليوم</p>
                  </li>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>هذا السبوع</p>
                  </li>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>هذا الشهر</p>
                  </li>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>هذه السنة</p>
                  </li>
                </ul>
              )}
            </li>

            {/* Content type */}
            <li id="item_type" className={css.item}>
              <p
                className={css.item_heading}
                onClick={() => handleShow("type_list")}
              >
                نوع المحتوى
                <svg className={css.icon}>
                  <use href={icons + "#play"}></use>
                </svg>
              </p>
              {(isTypeList || isMediumScreen) && (
                <ul className={css.subcategories_list}>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>
                      المحتويات المتوفرة
                    </p>
                  </li>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>
                      المحتويات المرتقبة
                    </p>
                  </li>
                </ul>
              )}
            </li>

            {/* Curricula */}
            <li id="item_curricula" className={css.item}>
              <p
                className={css.item_heading}
                onClick={() => handleShow("curricula_list")}
              >
                المناهج
                <svg className={css.icon}>
                  <use href={icons + "#clock"}></use>
                </svg>
              </p>
              {(isCurriculaList || isMediumScreen) && (
                <ul className={css.subcategories_list}>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>المنهج التونسي</p>
                  </li>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>المنهج الليبي</p>
                  </li>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>
                      الدورات التكوينية
                    </p>
                  </li>
                </ul>
              )}
            </li>

            {/* favorite */}
            <li id="item_favorite" className={css.item}>
              <p
                className={css.item_heading}
                onClick={() => handleShow("favorite_list")}
              >
                التقييمات
                <svg className={css.icon}>
                  <use href={icons + "#star"}></use>
                </svg>
              </p>
              {(isFavoriteList || isMediumScreen) && (
                <ul className={css.subcategories_list}>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>الأعلى تقييما</p>
                  </li>
                  <li className={css.subcategories_item}>
                    <p className={css.subcategories_heading}>الأعلى مبيع</p>
                  </li>
                </ul>
              )}
            </li>

            {/* classification */}
            <li className={`${css.item} ${css.empty_item}`}>
              <p className={css.item_heading}>
                تصنيف
                <svg className={css.icon}>
                  <use href={icons + "#filter"}></use>
                </svg>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CoursesFilter;
