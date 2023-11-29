import css from "./CoursesFilter.module.scss";
import icons from "../../assets/images/icons/icons.svg";

const CoursesFilter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
            <li className={css.item}>
              <p className={css.item_heading}>تاريخ نشر المحتوى</p>
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
            </li>

            {/* Content type */}
            <li className={css.item}>
              <p className={css.item_heading}>نوع المحتوى</p>
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
            </li>

            {/* Curricula */}
            <li className={css.item}>
              <p className={css.item_heading}></p>
              <ul className={css.subcategories_list}>
                <li className={css.subcategories_item}>
                  <p className={css.subcategories_heading}>المنهج التونسي</p>
                </li>
                <li className={css.subcategories_item}>
                  <p className={css.subcategories_heading}>المنهج الليبي</p>
                </li>
                <li className={css.subcategories_item}>
                  <p className={css.subcategories_heading}>الدورات التكوينية</p>
                </li>
              </ul>
            </li>

            {/* favorite */}
            <li className={css.item}>
              <p className={css.item_heading}>التقييمات</p>
              <ul className={css.subcategories_list}>
                <li className={css.subcategories_item}>
                  <p className={css.subcategories_heading}>الأعلى تقييما</p>
                </li>
                <li className={css.subcategories_item}>
                  <p className={css.subcategories_heading}>الأعلى مبيع</p>
                </li>
              </ul>
            </li>

            {/* classification */}
            <li className={css.item}>
              <p className={css.item_heading}>تصنيف</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CoursesFilter;
