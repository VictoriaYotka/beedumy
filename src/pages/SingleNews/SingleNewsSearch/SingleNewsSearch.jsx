import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import css from "./SingleNewsSearch.module.scss";

const SingleNewsSearch = () => {
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
            placeholder="أبحث عن محتوى"
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
