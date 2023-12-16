import css from "./SingleNews.module.scss";
import SingleNewsCard from "./SingleNewsCard/SingleNewsCard";
import SingleNewsAdditionalInfo from "./SingleNewsAdditionalInfo/SingleNewsAdditionalInfo";
import SingleNewsSearch from "./SingleNewsSearch/SingleNewsSearch";
import { useEffect, useState } from "react";
import SingleNewsComment from "./SingleNewsComment/SingleNewsComment";
import SimplePageHeader from "../../components/SimplePageHeader/SimplePageHeader";
import NewsHeaderList from "../../components/NewsHeaderList/NewsHeaderList";

const SingleNews = () => {
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

  return (
    <>
      <SimplePageHeader heading="مقالاتنا" background="#184d9c">
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
