import { useEffect, useState } from "react";
import css from "./BackToTopButton.module.scss";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (document.documentElement.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={css.button_wrapper}>
      {isVisible && (
        <button onClick={scrollToTop} className={css.scroll_button}>
          <i className="kipso-icon-top-arrow"></i>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
