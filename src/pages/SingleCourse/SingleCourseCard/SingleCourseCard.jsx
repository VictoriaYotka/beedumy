import css from "./SingleCourseCard.module.scss";
import icons from "../../../assets/images/icons/icons.svg";
import { Link } from "react-router-dom";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import { Rating } from "@smastrom/react-rating";

const SingleCourseCard = ({
  curriculum,
  admin,
  admin_image,
  title,
  rating,
}) => {
  return (
    <SectionAnimationWrapper>
      <div className={css.card}>
        <div className={css.info}>
          <div className={css.wrapper}>
            <div className={css.admin_wrapper}>
              <Link className={css.admin}>
                <div className={css.admin_image_thumb}>
                  {admin_image ? (
                    <img
                      className={css.admin_image}
                      src={admin_image}
                      alt={admin}
                    />
                  ) : (
                    <svg className={css.placeholder_user_icon}>
                      <use href={icons + "#user"}></use>
                    </svg>
                  )}
                </div>
                {admin}
              </Link>
            </div>

            <h2 className={css.title}>{title}</h2>
            <div className={css.rating}>
              {" "}
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            </div>
          </div>
          <p className={css.curriculum}>{curriculum}</p>
        </div>

        <div className={css.video_wrapper}>
          <iframe
            className={css.video}
            title={`${title} course video`}
            src="https://www.youtube.com/embed/JfJYHfrOGgQ"
            loading="lazy"
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
    </SectionAnimationWrapper>
  );
};

export default SingleCourseCard;
