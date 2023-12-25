import css from "./SingleNewsComment.module.scss";
import icons from "../../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";
import hero_image_sm from "../../../assets/images/home/hero/image_sm.webp";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const SingleNewsComment = ({
  comments_quantity = "3",
  author = "author name",
  author_about = "about author",
  date = "date",
}) => {
  const { t } = useTranslation();

  return (
    <>
      <SectionAnimationWrapper>
        <div className={css.comments_wrapper}>
          <h3 className={css.header}>نقاشات</h3>
          <div className={css.comments_subheader}>
            <svg className={css.icon}>
              <use href={icons + "#chat"}></use>
            </svg>
            <p>{comments_quantity}</p>
            <p>{t("news.single_news_comments_so_far")}</p>
          </div>
          <ul className={css.comments_list}>
            <li className={css.comments_card}>
              <div className={css.comments_image_wrapper}>
                <img
                  className={css.comments_image}
                  src={hero_image_sm}
                  alt=""
                />
              </div>
              <div className={css.comments_content_wrapper}>
                <h6 className={css.comments_name}>{author}</h6>
                <p className={css.comments_descr}>{author_about} </p>
                <div className={css.comments_additional_wrapper}>
                  <button className={css.comments_answer_button}>
                    {t("news.single_news_comments_answer")}
                  </button>
                  <p className={css.comments_date}>{date}</p>
                </div>
              </div>
            </li>
            <li className={css.comments_card}>
              <div className={css.comments_image_wrapper}>
                <img
                  className={css.comments_image}
                  src={hero_image_sm}
                  alt=""
                />
              </div>
              <div className={css.comments_content_wrapper}>
                <h6 className={css.comments_name}>{author}</h6>
                <p className={css.comments_descr}>{author_about} </p>
                <div className={css.comments_additional_wrapper}>
                  <button className={css.comments_answer_button}>
                    {t("news.single_news_comments_answer")}
                  </button>
                  <p className={css.comments_date}>{date}</p>
                </div>
              </div>
            </li>
            <li className={css.comments_card}>
              <div className={css.comments_image_wrapper}>
                <img
                  className={css.comments_image}
                  src={hero_image_sm}
                  alt=""
                />
              </div>
              <div className={css.comments_content_wrapper}>
                <h6 className={css.comments_name}>{author}</h6>
                <p className={css.comments_descr}>{author_about} </p>
                <div className={css.comments_additional_wrapper}>
                  <button className={css.comments_answer_button}>
                    {t("news.single_news_comments_answer")}
                  </button>
                  <p className={css.comments_date}>{date}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </SectionAnimationWrapper>

      <SectionAnimationWrapper>
        <div className={css.add_wrapper}>
          <h3 className={css.header}>
            {t("news.single_news_comments_add_header")}
          </h3>
          <form>
            <div className={css.input_group}>
              <input
                type="email"
                name="single_news_comment_email"
                id="single_news_comment_email"
                placeholder={t("news.single_news_comments_email")}
                className={css.input}
              />
              <input
                type="text"
                name="single_news_comment_name"
                id="single_news_comment_name"
                placeholder={t("news.single_news_comments_name")}
                className={css.input}
              />
            </div>
            <textarea
              name="single_news_comment_comment"
              id="single_news_comment_comment"
              cols="30"
              rows="5"
              placeholder={t("news.single_news_comments_comment")}
              className={css.textarea}
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
