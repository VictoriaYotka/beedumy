import { Link } from "react-router-dom";
import css from "./RelatedCourseCard.module.scss";
import icons from "../../../assets/images/icons/icons.svg";

const RelatedCourseCard = ({ image, admin, title, stars }) => {
  return (
    <li className={css.item}>
      <Link className={css.content}>
        <div className={css.image_wrapper}>
          {image ? (
            <img className={css.image} src={image} alt="" />
          ) : (
            <svg className={css.placeholder_icon}>
              <use href={icons + "#placeholder"}></use>
            </svg>
          )}
        </div>
        <div className={css.info_wrapper}>
          <p className={css.admin}>{admin}</p>
          <h6 className={css.title}>{title}</h6>
          <div className={css.stars}>{stars}</div>
        </div>
      </Link>
    </li>
  );
};

export default RelatedCourseCard;
