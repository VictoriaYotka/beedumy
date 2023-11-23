import css from "./SearchButton.module.scss";

const SearchButton = () => {
  return (
    <button className={css.search_button}>
      <div className={css.search_box}>
        <i className="kipso-icon-magnifying-glass"></i>
      </div>
    </button>
  );
};

export default SearchButton;
