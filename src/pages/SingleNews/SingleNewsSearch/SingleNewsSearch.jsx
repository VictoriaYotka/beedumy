import css from "./SingleNewsSearch.module.scss";
import { useTranslation } from "react-i18next";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import { useState } from "react";

const SingleNewsSearch = () => {
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      console.log(inputValue);
      e.target.reset();
    }
  };

  return (
    <SectionAnimationWrapper>
      <div className={css.container}>
        <form className={css.form} onSubmit={handleSearchFormSubmit}>
          <input
            id="singlenews_search_input"
            type="text"
            name="search_input"
            onChange={handleInputChange}
            value={inputValue}
            placeholder={t("news.single_news_search")}
            className={css.input}
            required
          />
          <button type="submit" className={css.search_button}>
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
