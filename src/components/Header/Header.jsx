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
              <a href="tel:+21670253734" className={css.contact_link}>
                <p className={css.link_content}>(+216) 70 253 734</p>
                <svg className={css.icon}>
                  <use href={icons + "#mobile"}></use>
                </svg>
              </a>
            </li>
            <li className={css.item_devider}></li>
            <li className={css.item}>
              <a
                href="mailto:contact@birsaplatform.com"
                className={css.contact_link}
              >
                <p className={css.link_content}>contact@birsaplatform.com</p>
                <svg className={css.icon}>
                  <use href={icons + "#envelope"}></use>
                </svg>
              </a>
            </li>
          </ul>
          <div className={css.wrapper}>
            <ul className={css.socials}>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={css.social_link}
                >
                  <svg className={css.icon}>
                    <use href={icons + "#facebook"}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={css.social_link}
                >
                  <svg className={css.icon}>
                    <use href={icons + "#google-plus"}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={css.social_link}
                >
                  <svg className={css.icon}>
                    <use href={icons + "#linkedin"}></use>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={css.social_link}
                >
                  <svg className={css.icon}>
                    <use href={icons + "#twitter"}></use>
                  </svg>
                </a>
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
                  <p> العربي</p>
                </button>
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
          <nav className={css.nav}>
            <ul className={css.nav_list}>
              <li>
                <NavLink to="/categories" className={css.nav_link}>
                  المحتوى
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={css.nav_link}>
                  من نحن؟
                </NavLink>
              </li>
            </ul>
            <NavLink to="/" className={css.nav_link}>
              LOGO
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
