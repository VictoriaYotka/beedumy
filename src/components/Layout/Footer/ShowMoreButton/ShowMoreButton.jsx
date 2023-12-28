import css from "./ShowMoreButton.module.scss";
import icons from "../../../../assets/images/icons/icons.svg";
import { useTranslation } from "react-i18next";

const ShowMoreButton = ({ toggleShowMore, showMore }) => {
  const { t } = useTranslation();

  return (
    <button onClick={toggleShowMore} className={css.show_more_button}>
      <span>
        {showMore
          ? `${t("sharedLayout.hide_button")}`
          : `${t("sharedLayout.show_more_button")}`}
      </span>
      <svg
        className={showMore ? `${css.hide_more_icon}` : `${css.show_more_icon}`}
      >
        <use href={icons + "#chevron-down"}></use>
      </svg>
    </button>
  );
};

export default ShowMoreButton;
