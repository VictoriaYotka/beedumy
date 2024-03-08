import css from "./BurgerMenu.module.scss";
import icons from "../../../../assets/images/icons/icons.svg";
import ContactsList from "../ContactsList/ContactsList";
import SocialsList from "../../../SocialsList/SocialsList";
import SearchButton from "../SearchButton/SearchButton";
import SignList from "../SignList/SignList";
import NavListBurger from "../NavListBurger/NavListBurger";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { animated } from "@react-spring/web";
import { useConditionalSpring } from "../../../../utils";

const BurgerMenu = ({ toggleMenu, isOpenBurgerMenu }) => {
  const transitions =
    useConditionalSpring.useConditionalBurgerMenuTransition(isOpenBurgerMenu);

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

      {transitions((style, isTrue) => {
        switch (isTrue) {
          case true:
            return (
              <animated.div className={css.burger_content} style={style}>
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
              </animated.div>
            );

          default:
            return null;
        }
      })}
    </>
  );
};

export default BurgerMenu;
