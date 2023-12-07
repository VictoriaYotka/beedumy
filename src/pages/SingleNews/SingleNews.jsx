import css from "./SingleNews.module.scss";
import NewsHeader from "../../components/NewsHeader/NewsHeader";
import SingleNewsCard from "../../components/SingleNewsCard/SingleNewsCard";
import SingleNewsAdditionalInfo from "../../components/SingleNewsAdditionalInfo/SingleNewsAdditionalInfo";

const SingleNews = () => {
  return (
    <>
      <NewsHeader />
      <section className={css.section}>
        <div className={css.container}>
          <SingleNewsAdditionalInfo />
          <SingleNewsCard />
        </div>
      </section>
    </>
  );
};

export default SingleNews;
