import { Link } from "react-router-dom";
import css from "./PopularNewsItem.module.scss";

const PopularNewsItem = () => {
  return (
    <li className={css.articles_item}>
      <Link className={css.articles_link}>
        <div className={css.articles_image_wrapper}>
          <img className={css.articles_image} src="" alt="" />
        </div>
        <h6 className={css.articles_title}>title</h6>
      </Link>
    </li>
  );
};

export default PopularNewsItem;
