import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import css from "./CommentCard.module.scss";
import icons from "../../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";

const CommentCard = ({ image, author, comment, date }) => {
  const { t } = useTranslation();

  return (
    <SectionAnimationWrapper>
      <li className={css.item}>
        <div className={css.image_wrapper}>
          {image ? (
            <img className={css.image} src={image} alt="" />
          ) : (
            <svg className={css.placeholder_icon}>
              <use href={icons + "#user"}></use>
            </svg>
          )}
        </div>
        <div className={css.content_wrapper}>
          <h6 className={css.name}>{author}</h6>
          <p className={css.descr}>{comment} </p>
          <div className={css.additional_wrapper}>
            <button className={css.answer_button}>
              {t("news.single_news_comments_answer")}
            </button>
            <p className={css.date}>{date}</p>
          </div>
        </div>
      </li>
    </SectionAnimationWrapper>
  );
};

export default CommentCard;
