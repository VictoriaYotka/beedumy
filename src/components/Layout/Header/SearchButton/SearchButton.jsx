import css from "./SearchButton.module.scss";

const SearchButton = () => {
  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    console.log("submit header search");

    const inputEl = document.getElementById("header_search_input");
    inputEl.classList.toggle(`${css.input_visible}`);
    inputEl.focus();
  };

  return (
    <form
      id="search_form"
      className={css.form}
      onSubmit={handleSearchFormSubmit}
    >
      <button className={css.search_button}>
        <div className={css.search_box}>
          <i className="kipso-icon-magnifying-glass"></i>
        </div>
      </button>
      <input
        id="header_search_input"
        type="text"
        name="search_input"
        className={css.input}
      />
    </form>
  );
};

export default SearchButton;
