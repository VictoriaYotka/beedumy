import css from "./SingleCourseCard.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import triangle_green_small from "../../assets/images/home/hero/triangle-green-small.png";
import { Link } from "react-router-dom";

const SingleCourseCard = ({
  curriculum,
  admin,
  admin_image = triangle_green_small,
  title,
}) => {
  return (
    <div className={css.card}>
      <div className={css.info}>
        <div className={css.wrapper}>
          <div className={css.admin_wrapper}>
            <Link className={css.admin}>{admin}</Link>
            <img className={css.admin_image} src={admin_image} alt={admin} />
          </div>
          <h2 className={css.title}>{title}</h2>
          <div className={css.stars}> Stars</div>
        </div>
        <p className={css.curriculum}>{curriculum}</p>
      </div>

      <div className={css.video_wrapper}>
        <iframe
          className={css.video}
          title={`${title} course video`}
          src="https://www.youtube.com/embed/JfJYHfrOGgQ"
          gesture="media"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

        <button className={css.favorite_button}>
          <svg className={css.icon}>
            <use href={icons + "#heart"}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SingleCourseCard;
