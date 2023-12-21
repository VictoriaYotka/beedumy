import css from "./SearchButton.module.scss";

const SearchButton = () => {
  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    console.log("submit header search");
  };

  return (
    <form
      id="search_form"
      className={css.form}
      onSubmit={handleSearchFormSubmit}
    >
      <button className={css.button}>
        <div className={css.search_box}>
          <i className="kipso-icon-magnifying-glass"></i>
        </div>
      </button>
      <input
        id="header_search_input"
        type="text"
        name="header_search_input"
        className={css.input}
      />
    </form>
  );
};

export default SearchButton;
