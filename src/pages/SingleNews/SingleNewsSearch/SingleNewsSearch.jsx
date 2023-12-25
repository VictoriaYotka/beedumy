import css from "./SingleNewsSearch.module.scss";
import { useTranslation } from "react-i18next";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const SingleNewsSearch = () => {
  const { t } = useTranslation();

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    console.log("submit single news search");
  };

  return (
    <SectionAnimationWrapper>
      <div className={css.container}>
        <form className={css.form} onSubmit={handleSearchFormSubmit}>
          <input
            id="singlenews_search_input"
            type="text"
            name="search_input"
            placeholder={t("news.single_news_search")}
            className={css.input}
          />
          <button className={css.search_button}>
            <div className={css.search_box}>
              <i className="kipso-icon-magnifying-glass"></i>
            </div>
          </button>
        </form>
      </div>
    </SectionAnimationWrapper>
  );
};

export default SingleNewsSearch;
