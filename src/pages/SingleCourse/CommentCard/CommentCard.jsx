import css from "./CommentCard.module.scss";
import icons from "../../../assets/images/icons/icons.svg";

const CommentCard = ({
  image,
  name = "محمد الورفلي",
  date = "12 جويلية 2023",
  stars = "Stars",
  comment = "هل ممكن بعض التمارين عن الفصل الخامس؟ هناك بعض المعادلات غير المفهو مع الشكر أستاذنا",
}) => {
  return (
    <>
      <div className={css.content}>
        <div className={css.image_wrapper}>
          {image ? (
            <img className={css.image} src={image} alt="" />
          ) : (
            <svg className={css.user_icon}>
              <use href={icons + "#user"}></use>
            </svg>
          )}
        </div>
        <div className={css.info_wrapper}>
          <p className={css.name}>{name}</p>
          <div className={css.info_inner_wrapper}>
            <div className={css.stars}>{stars}</div>
            <span className={css.date}>{date}</span>
          </div>
        </div>
      </div>
      <p className={css.comment}>{comment}</p>
    </>
  );
};

export default CommentCard;
