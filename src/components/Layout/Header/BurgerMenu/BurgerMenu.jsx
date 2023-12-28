import css from "./BurgerMenu.module.scss";
import icons from "../../../../assets/images/icons/icons.svg";
import ContactsList from "../ContactsList/ContactsList";
import SocialsList from "../../../SocialsList/SocialsList";
import SearchButton from "../SearchButton/SearchButton";
import SignList from "../SignList/SignList";
import NavListBurger from "../NavListBurger/NavListBurger";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const BurgerMenu = ({ toggleMenu, isOpenBurgerMenu }) => {
  return (
    <>
      <div onClick={toggleMenu} id="burger_menu">
        <svg className={css.icon}>
          {isOpenBurgerMenu ? (
            <use href={icons + "#close"}></use>
          ) : (
            <use href={icons + "#burger"}></use>
          )}
        </svg>
      </div>

      {isOpenBurgerMenu && (
        <div className={css.burger_content}>
          <div className={css.topper_wrapper}>
            <SearchButton />
            <LanguageSwitcher />
          </div>

          <nav className={css.nav}>
            <NavListBurger />
          </nav>
          <SignList />

          <div className={css.bottom_wrapper}>
            <ul className={css.socials_list}>
              <SocialsList />
            </ul>
            <ContactsList />
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
