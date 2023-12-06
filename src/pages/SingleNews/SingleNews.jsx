import css from "./SingleNews.module.scss";
import NewsHeader from "../../components/NewsHeader/NewsHeader";
import SingleNewsCard from "../../components/SingleNewsCard/SingleNewsCard";

const SingleNews = () => {
  return (
    <>
      <NewsHeader />
      <section className={css.section}>
        <div className={css.container}>
          <SingleNewsCard />
        </div>
      </section>
    </>
  );
};

export default SingleNews;
