import css from "./Footer.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import hero_image from "../../assets/images/home/hero/image.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showMore, setshowMore] = useState(
    window.innerWidth >= 768 ? true : false
  );
  const [showMoreButton, setshowMoreButton] = useState(
    window.innerWidth >= 768 ? false : true
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleShowMore = () => {
    setshowMore(!showMore);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);

      if (windowWidth >= 768) {
        setshowMore(true);
        setshowMoreButton(false);
      }

      if (windowWidth < 768) {
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
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.topper}>
          <div className={css.navigation_wrapper}>
            {/* Show more for mobile */}
            {showMoreButton && (
              <button onClick={toggleShowMore} className={css.show_more}>
                أظهر المزيد{" "}
                <svg className={css.icon}>
                  <use href={icons + "#chevron-down"}></use>
                </svg>
              </button>
            )}
            {showMore && (
              <>
                <ul className={css.list}>
                  <li className={css.item}>
                    <NavLink> تصفح المحتوى</NavLink>
                  </li>
                  <li className={css.item}>
                    <NavLink>الشروط والأحكام </NavLink>
                  </li>
                  <li className={css.item}>
                    <NavLink>سياسة الخصوصية</NavLink>
                  </li>
                </ul>

                <ul className={css.list}>
                  <li className={css.item}>
                    <NavLink>مساعدة</NavLink>
                  </li>
                  <li className={css.item}>
                    <NavLink>تواصل معنا</NavLink>
                  </li>
                  <li className={css.item}>
                    <NavLink>سجل مجـــــانا</NavLink>
                  </li>
                </ul>
                <NavLink className={css.gallery_heading}>باقة الصور</NavLink>
                <ul className={css.gallery_list}>
                  <li className={css.gallery_item}>
                    <img src={hero_image} alt="gallery" className={css.image} />
                  </li>
                  <li className={css.gallery_item}>
                    <img src={hero_image} alt="gallery" className={css.image} />
                  </li>
                  <li className={css.gallery_item}>
                    <img src={hero_image} alt="gallery" className={css.image} />
                  </li>
                  <li className={css.gallery_item}>
                    <img src={hero_image} alt="gallery" className={css.image} />
                  </li>
                  <li className={css.gallery_item}>
                    <img src={hero_image} alt="gallery" className={css.image} />
                  </li>
                  <li className={css.gallery_item}>
                    <img src={hero_image} alt="gallery" className={css.image} />
                  </li>
                </ul>
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
              </>
            )}
          </div>

          <div className={css.about_wrapper}>
            <h5 className={css.about_heading}>عن منصة بيرسا التعليمية</h5>

            <p className={css.about_descr}>
              نوفّر مواد تعليمية لدعم التلاميذ من جميع الفئـات العمرية. باإضافة
              إلى دورات في اخـتصاصات منعــددة
            </p>

            <NavLink className={css.follow_more_button}>تواصل معنا</NavLink>
            <button className={css.connect_button}>تعرّف أكثر</button>
          </div>
        </div>
      </div>
      <div className={css.bottom}>
        <p className={css.copyright}>
          <span className={css.copyright_accent}>www.birsaplatform.com</span>{" "}
          ©جميع الحقوق محفوظة{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
