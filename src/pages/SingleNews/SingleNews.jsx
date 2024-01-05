import css from "./SingleNews.module.scss";
import { useTranslation } from "react-i18next";
import SingleNewsCard from "./SingleNewsCard/SingleNewsCard";
import SingleNewsAdditionalInfo from "./SingleNewsAdditionalInfo/SingleNewsAdditionalInfo";
import SingleNewsSearch from "./SingleNewsSearch/SingleNewsSearch";
import { useEffect, useState } from "react";
import SingleNewsComment from "./SingleNewsComment/SingleNewsComment";
import SimplePageHeader from "../../components/SimplePageHeader/SimplePageHeader";
import NewsHeaderList from "../../components/NewsHeaderList/NewsHeaderList";
import { Link } from "react-router-dom";

const SingleNews = () => {
  const { t } = useTranslation();

  const [isMediumScreen, setIsMediumScreen] = useState(
    document.body.offsetWidth >= 768
  );

  const updateMedia = () => {
    setIsMediumScreen(document.body.offsetWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);

    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  });

  const NewsLink = () => (
    <Link to="/news" className={css.link}>
      {t("news.header")}
    </Link>
  );

  return (
    <>
      <SimplePageHeader heading={<NewsLink />} background="#184d9c">
        <NewsHeaderList />
      </SimplePageHeader>
      {!isMediumScreen && <SingleNewsSearch />}
      <section className={css.section}>
        <div className={css.container}>
          <div>
            <SingleNewsCard />
            <SingleNewsComment />
          </div>
          <div>
            {isMediumScreen && <SingleNewsSearch />}
            <SingleNewsAdditionalInfo />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleNews;
