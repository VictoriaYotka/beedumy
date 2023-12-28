import { Link } from "react-router-dom";
import css from "./SingleCourseAdditionalInfo.module.scss";
import icons from "../../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import RelatedCourseCard from "../RelatedCourseCard/RelatedCourseCard";

const SingleCourseAdditionalInfo = ({
  currency,
  fullPrice,
  discountedPrice,
  hours,
  purchasedTimes,
  degree,
  language,
}) => {
  const { t } = useTranslation();

  return (
    <div className={css.wrapper}>
      <SectionAnimationWrapper>
        <div className={css.price_container}>
          <h5 className={css.price_heading}>
            {t("courses.single_course_price_header")}
          </h5>
          <p className={css.price_value}>
            <span className={css.full_price}>
              {fullPrice} {currency}
            </span>
            <span className={css.discounted_price}>
              {discountedPrice} {currency}
            </span>
          </p>
          <Link to="/courses/courseId/buy" className={css.price_button}>
            {t("courses.single_course_price_button")}
          </Link>
        </div>
      </SectionAnimationWrapper>

      <SectionAnimationWrapper>
        <div className={css.details_container}>
          <ul className={css.details_list}>
            <li className={css.details_item}>
              <div className={css.details_icon_wrapper_1}>
                <svg className={css.details_icon}>
                  <use href={icons + "#clock"}></use>
                </svg>
              </div>
              <p className={css.condition}>
                {t("courses.single_course_details_duration")}:
              </p>
              <p className={css.info}>
                {" "}
                {t("courses.single_course_details_hours")} {hours}
              </p>
            </li>
            <li className={css.details_item}>
              <div className={css.details_icon_wrapper_2}>
                <svg className={css.details_icon}>
                  <use href={icons + "#folder"}></use>
                </svg>
              </div>
              <p className={css.condition}>
                {t("courses.single_course_details_purchased")}:
              </p>
              <p className={css.info}>
                {t("courses.single_course_details_times")} {purchasedTimes}
              </p>
            </li>
            <li className={css.details_item}>
              <div className={css.details_icon_wrapper_3}>
                <svg className={css.details_icon}>
                  <use href={icons + "#flag"}></use>
                </svg>
              </div>
              <p className={css.condition}>
                {t("courses.single_course_details_degree")}:
              </p>
              <p className={css.info}>{degree}</p>
            </li>
            <li className={css.details_item}>
              <div className={css.details_icon_wrapper_4}>
                <svg className={css.details_icon}>
                  <use href={icons + "#bell"}></use>
                </svg>
              </div>
              <p className={css.condition}>
                {t("courses.single_course_details_language")}:
              </p>
              <p className={css.info}>{language}</p>
            </li>
          </ul>
        </div>
      </SectionAnimationWrapper>

      <SectionAnimationWrapper>
        <div className={css.related_container}>
          <h5 className={css.related_heading}>
            {t("courses.single_course_related_header")}
          </h5>
          <ul className={css.related_list}>
            <RelatedCourseCard admin="Admin" title="Title" stars="Stars" />

            <RelatedCourseCard admin="Admin" title="Title" stars="Stars" />

            <RelatedCourseCard admin="Admin" title="Title" stars="Stars" />
          </ul>
        </div>
      </SectionAnimationWrapper>
    </div>
  );
};

export default SingleCourseAdditionalInfo;
