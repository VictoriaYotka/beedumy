import css from "./FeedbackCard.module.scss";
import icons from "../../../assets/images/icons/icons.svg";

const FeedbackCard = ({ content, img, name, descr }) => {
  return (
    <div className={css.item}>
      <div className={css.icon_wrapper}>
        <svg className={css.icon}>
          <use href={icons + "#quotes"}></use>
        </svg>
      </div>
      <p className={css.content}>{content}</p>
      <div className={css.image_thumb}>
        {img ? (
          <img src={img} alt="" loading="lazy" className={css.image} />
        ) : (
          <svg className={css.placeholder_icon}>
            <use href={icons + "#user"}></use>
          </svg>
        )}
      </div>
      <p className={css.name}>{name}</p>
      <p className={css.descr}>{descr}</p>
    </div>
  );
};

export default FeedbackCard;
