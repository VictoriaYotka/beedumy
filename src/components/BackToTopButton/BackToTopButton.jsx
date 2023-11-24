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
      <i class="kipso-icon-top-arrow"></i>
    </button>

    // <a
    //   href="#"
    //   data-target="html"
    //   class="scroll-to-target site-footer__scroll-top"
    // >
    //   <i class="kipso-icon-top-arrow"></i>
    // </a>
  );
};

export default BackToTopButton;
