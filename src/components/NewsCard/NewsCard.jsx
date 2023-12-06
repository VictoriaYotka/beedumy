import css from "./NewsCard.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import { Link } from "react-router-dom";

const NewsCard = ({ title, content, img, meta1, meta2, meta3 }) => {
  return (
    <li className={css.item}>
      <div className={css.image_wrapper}>
        <img className={css.image} src={img} alt="" />
      </div>
      <div className={css.content_wrapper}>
        <ul className={css.meta_list}>
          <li className={css.meta_item}>
            <div className={css.meta_icon_wrapper}>
              <svg className={css.meta_icon}>
                <use href={icons + "#calendar"}></use>
              </svg>
              <p className={css.meta_info}>{meta1}</p>
            </div>
          </li>
          <li className={css.meta_item}>
            <div className={css.meta_icon_wrapper}>
              <svg className={css.meta_icon}>
                <use href={icons + "#chat"}></use>
              </svg>
              <p className={css.meta_info}>{meta2}</p>
            </div>
          </li>
          <li className={css.meta_item}>
            <div className={css.meta_icon_wrapper}>
              <svg className={css.meta_icon}>
                <use href={icons + "#user"}></use>
              </svg>
              <p className={css.meta_info}>{meta3}</p>
            </div>
          </li>
        </ul>
        <h2 className={css.title}>{title}</h2>
        <p className={css.content}>{content}</p>
        <Link className={css.button}>اقرأ المقال كاملا</Link>
      </div>
    </li>
  );
};

export default NewsCard;
