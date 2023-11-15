import css from "./Header.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.topper}>
        <div className={css.topper_container}>
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
      </div>

      <div className={css.content}>
        <div className={css.content_container}>
          {/* Search button */}
          <button className={css.search_button}>
            <div className={css.search_box}>
              <i className="kipso-icon-magnifying-glass"></i>
            </div>
          </button>

          <ul className={css.sign_list}>
            <li>
              {/* register */}
              <button className={css.register_button}>سجل الآن</button>
            </li>
            <li>
              {/* login  */}
              <button className={css.login_button}>تسجيل الدخول</button>
            </li>
          </ul>
          <nav>
            <ul className={css.nav_list}>
              <li>
                <NavLink>المحتوى</NavLink>
              </li>
              <li>
                <NavLink>من نحن؟</NavLink>
              </li>
            </ul>
          </nav>
          <div>LOGO</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
