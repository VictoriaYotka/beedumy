import css from "./Footer.module.scss";
import { useTranslation } from "react-i18next";
import hero_image_sm from "../../../assets/images/home/hero/image_sm.webp";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionAnimationWrapper from "../../SectionAnimationWrapper/SectionAnimationWrapper";
import GalleryItem from "./GalleryItem/GalleryItem";
import SocialsList from "../../SocialsList/SocialsList";
import About from "./About/About";
import ShowMoreButton from "./ShowMoreButton/ShowMoreButton";
import FooterLists from "./FooterLists/FooterLists";

const Footer = () => {
  const { t } = useTranslation();

  const [showMore, setshowMore] = useState(
    document.body.offsetWidth >= 768 ? true : false
  );
  const [showMoreButton, setshowMoreButton] = useState(
    document.body.offsetWidth >= 768 ? false : true
  );

  const toggleShowMore = () => {
    setshowMore(!showMore);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (document.body.offsetWidth >= 768) {
        setshowMore(true);
        setshowMoreButton(false);
      }
      if (document.body.offsetWidth < 768) {
        setshowMore(false);
        setshowMoreButton(true);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <SectionAnimationWrapper>
      <footer className={css.footer}>
        <div className={css.container}>
          <div className={css.topper}>
            <About />
            <div className={css.navigation_wrapper}>
              <ul className={css.socials}>
                <SocialsList />
              </ul>
              <div className={css.lists_wrapper}>
                {showMoreButton && (
                  <ShowMoreButton
                    toggleShowMore={toggleShowMore}
                    showMore={showMore}
                  />
                )}
                {showMore && (
                  <>
                    <div>
                      <NavLink className={css.gallery_heading}>
                        {t("sharedLayout.gallery_heading")}
                      </NavLink>
                      <ul className={css.gallery_list}>
                        <GalleryItem img={hero_image_sm} />
                        <GalleryItem img={hero_image_sm} />
                        <GalleryItem img={hero_image_sm} />
                        <GalleryItem />
                        <GalleryItem />
                        <GalleryItem />
                      </ul>
                    </div>
                    <FooterLists />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={css.bottom}>
          <p className={css.copyright}> {t("sharedLayout.copyright")}</p>
          <p className={css.copyright_accent}>www.birsaplatform.com</p>
        </div>
      </footer>
    </SectionAnimationWrapper>
  );
};

export default Footer;
