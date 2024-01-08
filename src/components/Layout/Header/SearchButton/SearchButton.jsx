import css from "./SearchButton.module.scss";
import icons from "../../../../assets/images/icons/icons.svg";
import { useEffect, useRef, useState } from "react";

const SearchButton = () => {
  const [inputValue, setInputValue] = useState("");
  const [isSearchFormOpen, setIsSearchFormOpen] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormClose = (e) => {
    setIsSearchFormOpen(false);
    setInputValue("");
  };

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();

    if (!isSearchFormOpen) {
      setIsSearchFormOpen(true);
      return;
    }

    if (isSearchFormOpen && inputValue.trim() !== "") {
      console.log(inputValue);
      e.target.reset();
    }
  };

  const handlerClicks = (e) => {
    const backdrop =
      e.target.closest("#header_search_form") === null && e.type === "click";
    const target = e.key === "Escape";

    if (backdrop || target) {
      handleFormClose();
    }
  };

  useEffect(() => {
    if (isSearchFormOpen) {
      window.addEventListener("click", handlerClicks);
      window.addEventListener("keydown", handlerClicks);
    }

    return () => {
      window.removeEventListener("click", handlerClicks);
      window.removeEventListener("keydown", handlerClicks);
    };
  });

  useEffect(() => {
    if (isSearchFormOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchFormOpen]);

  return (
    <form
      id="header_search_form"
      className={`${css.form} ${isSearchFormOpen ? css.active : ""}`}
      onSubmit={handleSearchFormSubmit}
    >
      {isSearchFormOpen && (
        <input
          ref={inputRef}
          onChange={handleInputChange}
          value={inputValue}
          type="text"
          id="header_search_input"
          name="header_search_input"
          className={css.input}
        />
      )}

      <button
        type="submit"
        id="header_search_button"
        className={css.search_button}
      >
        <i className="kipso-icon-magnifying-glass"></i>
      </button>

      {isSearchFormOpen && (
        <button
          id="header_search_close"
          className={css.close_button}
          onClick={handleFormClose}
        >
          <svg className={css.close_icon}>
            <use href={icons + "#close"}></use>
          </svg>
        </button>
      )}
    </form>
  );
};

export default SearchButton;
