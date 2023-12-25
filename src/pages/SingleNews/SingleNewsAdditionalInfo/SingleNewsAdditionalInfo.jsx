import { Link } from "react-router-dom";
import css from "./SingleNewsAdditionalInfo.module.scss";
import { useTranslation } from "react-i18next";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import PopularNewsItem from "../../../components/PopularNewsItem/PopularNewsItem";

const SingleNewsAdditionalInfo = ({
  keyword1 = "keyword1",
  keyword2 = "keyword2",
  keyword3 = "keyword3",
  keyword4 = "keyword4",
  various_topic1 = "various topic 1",
  various_topic2 = "various topic 2",
  various_topic3 = "various topic 3",
  various_topic4 = "various topic 4",
}) => {
  const { t } = useTranslation();

  return (
    <div className={css.wrapper}>
      <SectionAnimationWrapper>
        <div className={css.container}>
          <h5 className={css.heading}>
            {t("news.single_news_additional_other_articles")}
          </h5>
          <ul className={css.articles_list}>
            <PopularNewsItem />
            <PopularNewsItem />
            <PopularNewsItem />
          </ul>
        </div>
      </SectionAnimationWrapper>

      <SectionAnimationWrapper>
        <div className={css.container}>
          <h5 className={css.heading}>{t("news.single_news_keywords")}</h5>
          <ul className={css.keywords_list}>
            <li className={css.keywords_item}>
              <Link>{keyword1}</Link>
            </li>
            <li className={css.keywords_item}>
              <Link>{keyword2}</Link>
            </li>
            <li className={css.keywords_item}>
              <Link>{keyword3}</Link>
            </li>
            <li className={css.keywords_item}>
              <Link>{keyword4}</Link>
            </li>
          </ul>
        </div>
      </SectionAnimationWrapper>

      <SectionAnimationWrapper>
        <div className={css.container}>
          <h5 className={css.heading}>
            {t("news.single_news_additional_various_topics")}
          </h5>
          <ul className={css.topics_list}>
            <li className={css.topics_item}>
              <Link>{various_topic1}</Link>
            </li>
            <li className={css.topics_item}>
              <Link>{various_topic2}</Link>
            </li>
            <li className={css.topics_item}>
              <Link>{various_topic3}</Link>
            </li>
            <li className={css.topics_item}>
              <Link>{various_topic4}</Link>
            </li>
          </ul>
        </div>
      </SectionAnimationWrapper>
    </div>
  );
};

export default SingleNewsAdditionalInfo;
