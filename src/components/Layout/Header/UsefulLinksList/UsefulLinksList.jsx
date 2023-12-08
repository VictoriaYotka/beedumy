import css from "./UsefulLinksList.module.scss";
import icons from "../../../../assets/images/icons/icons.svg";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const UsefulLinksList = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <p>تواصل معنا :</p>
      </li>
      <li className={css.item}>
        {/* <button className={css.button_icon}>
          <svg className={css.icon}>
            <use href={icons + "#chevron-down"}></use>
          </svg>
          <p> العربي</p>
        </button> */}
        <LanguageSwitcher />
      </li>
    </ul>
  );
};

export default UsefulLinksList;
