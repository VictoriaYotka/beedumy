import css from "./Header.module.scss";
import ContactsList from "./ContactsList/ContactsList";
import SocialsList from "./SocialsList/SocialsList";
import UsefulLinksList from "./UsefulLinksList/UsefulLinksList";
import SearchButton from "./SearchButton/SearchButton";
import SignList from "./SignList/SignList";
import NavList from "./NavList/NavList";
import Logo from "./Logo/Logo";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(
    document.body.offsetWidth >= 768
  );
  const [isLargeScreen, setIsLargeScreen] = useState(
    document.body.offsetWidth >= 992
  );
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  const location = useLocation();

  const toggleBodyScroll = () => {
    document.body.style.overflowY =
      document.body.style.overflowY === "hidden" ? "visible" : "hidden";
  };

  const toggleMenu = () => {
    setIsOpenBurgerMenu(!isOpenBurgerMenu);
    toggleBodyScroll();
  };

  const updateMedia = () => {
    setIsMediumScreen(document.body.offsetWidth >= 768);
    setIsLargeScreen(document.body.offsetWidth >= 992);
    if (isLargeScreen) {
      setIsOpenBurgerMenu(false);
      toggleBodyScroll();
    }
  };

  const handlerClicks = (e) => {
    const backdrop =
      e.target.closest("#burger_menu") === null &&
      e.target.closest("#navigation") === null;
    const target = e.key === "Escape";
    if (backdrop || target) {
      setIsOpenBurgerMenu(false);
      toggleBodyScroll();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    if (isOpenBurgerMenu) {
      window.addEventListener("click", handlerClicks);
      window.addEventListener("keydown", handlerClicks);
    }

    return () => {
      window.removeEventListener("resize", updateMedia);
      window.removeEventListener("click", handlerClicks);
      window.removeEventListener("keydown", handlerClicks);
    };
  });

  useEffect(() => {
    setIsOpenBurgerMenu(false);
  }, [location.pathname]);

  return (
    <header className={css.header}>
      {isLargeScreen && (
        <>
          <div className={css.topper}>
            <div className={css.topper_container}>
              <ContactsList />
              <div className={css.wrapper}>
                <SocialsList />
                <UsefulLinksList />
              </div>
            </div>
          </div>

          <div className={css.content}>
            <div className={css.content_container}>
              <SearchButton />
              <SignList />
              <nav className={css.nav}>
                <NavList />
                <Logo />
              </nav>
            </div>
          </div>
        </>
      )}

      {!isLargeScreen && (
        <>
          <BurgerMenu
            toggleMenu={toggleMenu}
            isOpenBurgerMenu={isOpenBurgerMenu}
            isLargeScreen={isLargeScreen}
          />
          {isMediumScreen && (
            <>
              <NavList />
            </>
          )}
          <Logo />
        </>
      )}
    </header>
  );
};

export default Header;
