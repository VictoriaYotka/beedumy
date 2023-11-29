import { useState } from "react";
import css from "./BackToTopButton.module.scss";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className={css.scroll_button}
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      <i className="kipso-icon-top-arrow"></i>
    </button>

  );
};

export default BackToTopButton;
