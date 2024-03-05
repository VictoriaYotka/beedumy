import css from "./SingleNewsComment.module.scss";
import icons from "../../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";
import hero_image_sm from "../../../assets/images/home/hero/image_sm.webp";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import CommentCard from "../CommentCard/CommentCard";

const SingleNewsComment = ({
  comments_quantity = "3",
  handleAddSingleNewsCommentFormSubmit,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={css.comments_wrapper}>
        <SectionAnimationWrapper>
          <h3 className={css.header}>نقاشات</h3>
          <div className={css.comments_subheader}>
            <svg className={css.icon}>
              <use href={icons + "#chat"}></use>
            </svg>
            <p>{comments_quantity}</p>
            <p>{t("news.single_news_comments_so_far")}</p>
          </div>
        </SectionAnimationWrapper>
        <ul className={css.comments_list}>
          <CommentCard
            image={hero_image_sm}
            author="author name"
            comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat modi sapiente omnis fugiat, odio odit et sequi ex, dolorum quis delectus ut aut dignissimos. Suscipit labore quis in impedit eum?"
            date="date"
          />
          <CommentCard
            author="author name"
            comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolorum quis delectus ut aut dignissimos. Suscipit labore quis in impedit eum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat modi sapiente omnis fugiat, odio odit et sequi ex, dolorum quis delectus ut aut dignissimos. Suscipit impedit eum?"
            date="date"
          />
          <CommentCard
            author="author name"
            comment="comment here"
            date="date"
          />
        </ul>
      </div>

      <SectionAnimationWrapper>
        <div className={css.add_wrapper}>
          <h3 className={css.header}>
            {t("news.single_news_comments_add_header")}
          </h3>
          <form onSubmit={handleAddSingleNewsCommentFormSubmit}>
            <div className={css.input_group}>
              <input
                type="email"
                name="single_news_comment_email"
                id="single_news_comment_email"
                placeholder={t("news.single_news_comments_email")}
                className={css.input}
                required
              />
              <input
                type="text"
                name="single_news_comment_name"
                id="single_news_comment_name"
                placeholder={t("news.single_news_comments_name")}
                className={css.input}
                required
              />
            </div>
            <textarea
              name="single_news_comment_comment"
              id="single_news_comment_comment"
              cols="30"
              rows="8"
              placeholder={t("news.single_news_comments_comment")}
              className={css.textarea}
              required
            ></textarea>
            <button type="submit" className={css.form_button}>
              {t("news.single_news_comments_submit")}
            </button>
          </form>
        </div>
      </SectionAnimationWrapper>
    </>
  );
};

export default SingleNewsComment;
