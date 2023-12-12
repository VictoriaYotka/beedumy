import { Link } from "react-router-dom";
import css from "./SingleCourseAdditionalInfo.module.scss";
import icons from "../../assets/images/icons/icons.svg";

const SingleCourseAdditionalInfo = ({
  fullPrice,
  discountedPrice,
  hours = "40",
  purchasedTimes = "30",
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.price_container}>
        <h5 className={css.price_heading}>ثمن المحتوى</h5>
        <p className={css.price_value}>
          <span className={css.full_price}>
            {fullPrice}
            د.ل
          </span>
          <span className={css.discounted_price}>
            {discountedPrice}
            د.ل
          </span>
        </p>
        <Link to="/courses/courseId/buy" className={css.price_button}>
          شراء المحتوى
        </Link>
      </div>

      <div className={css.details_container}>
        <ul className={css.details_list}>
          <li className={css.details_item}>
            <div className={css.details_icon_wrapper_1}>
              <svg className={css.details_icon}>
                <use href={icons + "#clock"}></use>
              </svg>
            </div>
            <p className={css.condition}>مدّة المحتوى :</p>
            <p className={css.info}> ساعة {hours}</p>
          </li>
          <li className={css.details_item}>
            <div className={css.details_icon_wrapper_2}>
              <svg className={css.details_icon}>
                <use href={icons + "#folder"}></use>
              </svg>
            </div>
            <p className={css.condition}>مرّات الشّراء :</p>
            <p className={css.info}> مرّة {purchasedTimes}</p>
          </li>
          <li className={css.details_item}>
            <div className={css.details_icon_wrapper_3}>
              <svg className={css.details_icon}>
                <use href={icons + "#flag"}></use>
              </svg>
            </div>
            <p className={css.condition}>درجة الصعوبة :</p>
            <p className={css.info}>متقدم</p>
          </li>
          <li className={css.details_item}>
            <div className={css.details_icon_wrapper_4}>
              <svg className={css.details_icon}>
                <use href={icons + "#bell"}></use>
              </svg>
            </div>
            <p className={css.condition}>اللّغة :</p>
            <p className={css.info}>العربية</p>
          </li>
        </ul>
      </div>

      <div className={css.related_container}>
        <h5 className={css.related_heading}>محتويات ذات صلة</h5>
        <ul className={css.related_list}>
          <li className={css.related_item}>
            <div className={css.related_image_wrapper}>
              <img className={css.related_image} src="" alt="" />
            </div>
            <div className={css.related_info_wrapper}>
              <p className={css.admin}>admin</p>
              <h6 className={css.title}>title</h6>
              <div className={css.stars}> Stars</div>
            </div>
          </li>
          <li className={css.related_item}>
            <div className={css.related_image_wrapper}>
              <img className={css.related_image} src="" alt="" />
            </div>
            <div className={css.related_info_wrapper}>
              <p className={css.admin}>admin</p>
              <h6 className={css.title}>title</h6>
              <div className={css.stars}> Stars</div>
            </div>
          </li>
          <li className={css.related_item}>
            <div className={css.related_image_wrapper}>
              <img className={css.related_image} src="" alt="" />
            </div>
            <div className={css.related_info_wrapper}>
              <p className={css.admin}>admin</p>
              <h6 className={css.title}>title</h6>
              <div className={css.stars}> Stars</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleCourseAdditionalInfo;
