import css from "./SingleNews.module.scss";
import NewsHeader from "../../components/NewsHeader/NewsHeader";
import SingleNewsCard from "../../components/SingleNewsCard/SingleNewsCard";
import SingleNewsAdditionalInfo from "../../components/SingleNewsAdditionalInfo/SingleNewsAdditionalInfo";
import SingleNewsSearch from "../../components/SingleNewsSearch/SingleNewsSearch";
import { useEffect, useState } from "react";
import SingleNewsComment from "../../components/SingleNewsComment/SingleNewsComment";

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
      <NewsHeader />
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
