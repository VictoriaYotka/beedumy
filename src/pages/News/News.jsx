import NewsList from "./NewsList/NewsList";
import SimplePageHeader from "../../components/SimplePageHeader/SimplePageHeader";
import NewsHeaderList from "../../components/NewsHeaderList/NewsHeaderList";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();

  return (
    <>
      <SimplePageHeader heading={t("news.header")} background="#5e5ed6">
        <NewsHeaderList />
      </SimplePageHeader>
      <NewsList />
    </>
  );
};

export default News;
