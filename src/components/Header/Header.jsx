import css from "./Header.module.scss";
import icons from "../../assets/images/icons/icons.svg";

const Header = () => {
  return (
    <header>
      <div className={css.topper}>
        <div>
          <ul className={css.list}>
            <li className={css.item}>
              <p>(+216) 70 253 734</p>
              <svg className={css.icon}>
                <use href={icons + "#mobile"}></use>
              </svg>
            </li>
            <li className={css.item}>
              <p>contact@birsaplatform.com</p>
              <svg className={css.icon}>
                <use href={icons + "#envelope"}></use>
              </svg>
            </li>
          </ul>
        </div>
        <div className={css.wrapper}>
          <ul className={css.socials}>
            <li>
              <svg className={css.icon}>
                <use href={icons + "#facebook"}></use>
              </svg>
            </li>
            <li>
              <svg className={css.icon}>
                <use href={icons + "#google-plus"}></use>
              </svg>
            </li>
            <li>
              <svg className={css.icon}>
                <use href={icons + "#linkedin"}></use>
              </svg>
            </li>
            <li>
              <svg className={css.icon}>
                <use href={icons + "#twitter"}></use>
              </svg>
            </li>
          </ul>
          <ul className={css.list}>
            <li className={css.item}>
              <p>تواصل معنا :</p>
            </li>
            <li className={css.item}>
              <button className={css.button_icon}>
                <svg className={css.icon}>
                  <use href={icons + "#chevron-down"}></use>
                </svg>
              </button>
              <p> العربي</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.content}></div>
    </header>
  );
};

export default Header;
