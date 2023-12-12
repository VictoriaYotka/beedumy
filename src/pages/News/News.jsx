import NewsList from "../../components/NewsList/NewsList";
import SimplePageHeader from "../../components/SimplePageHeader/SimplePageHeader";
import NewsHeaderList from "../../components/NewsHeaderList/NewsHeaderList";

const News = () => {
  return (
    <>
      <SimplePageHeader heading="مقالاتنا" background="#5e5ed6">
        <NewsHeaderList />
      </SimplePageHeader>
      <NewsList />
    </>
  );
};

export default News;
