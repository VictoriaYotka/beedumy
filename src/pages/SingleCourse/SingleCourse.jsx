import css from "./SingleCourse.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import { animated, useSpring } from "@react-spring/web";
import triangle_green_little_sm from "../../assets/images/home/hero/triangle-green-little_sm.webp";
import SingleCourseCard from "./SingleCourseCard/SingleCourseCard";
import SingleCourseAdditionalInfo from "./SingleCourseAdditionalInfo/SingleCourseAdditionalInfo";
import SimplePageHeader from "../../components/SimplePageHeader/SimplePageHeader";
import SingleCourseDetails from "./SingleCourseDetails/SingleCourseDetails";
import { useCallback, useEffect, useState } from "react";
import ModalWrapper from "../../components/ModalWrapper/ModalWrapper";
import { toggleBodyScroll, useConditionalSpring } from "../../utils";

const SingleCourse = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(
    document.body.offsetWidth >= 768
  );

  const [isOpenAdditionalInfo, setIsOpenAdditionalInfo] = useState(
    document.body.offsetWidth >= 768
  );

  const openAdditionalInfo = () => {
    toggleBodyScroll("clip");
    setIsOpenAdditionalInfo(true);
  };

  const closeAdditionalInfo = useCallback(() => {
    toggleBodyScroll("visible");
    setIsOpenAdditionalInfo(false);
  }, []);

  const updateMedia = () => {
    setIsMediumScreen(document.body.offsetWidth >= 768);
    if (isMediumScreen) closeAdditionalInfo();
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);

    return () => {
      window.removeEventListener("resize", updateMedia);
    };
  });

  useEffect(() => {
    const handlerClicks = (e) => {
      const backdrop = e.target.closest("#backdrop");
      const modal = e.target.closest("#modal");
      const target = e.key === "Escape";

      if ((backdrop && !modal) || target) {
        closeAdditionalInfo();
      }
    };

    if (isOpenAdditionalInfo) {
      window.addEventListener("click", handlerClicks);
      window.addEventListener("keydown", handlerClicks);
    }

    return () => {
      window.removeEventListener("click", handlerClicks);
      window.removeEventListener("keydown", handlerClicks);
    };
  }, [isOpenAdditionalInfo, closeAdditionalInfo]);

  const transitions =
    useConditionalSpring.useConditionalModalsTransition(isOpenAdditionalInfo);

  const [buttonStyles, set] = useSpring(() => ({
    ...useConditionalSpring.useButtonStyles,
  }));

  return (
    <>
      <SimplePageHeader heading="heading" subheading="level" />
      <section className={css.section}>
        <div className={css.container}>
          <div className={css.wrapper}>
            <SingleCourseCard
              curriculum="curriculum"
              admin="Name Surname"
              admin_image={triangle_green_little_sm}
              title="Course title"
            />
            {!isMediumScreen && (
              <>
                <animated.button
                  className={css.cart_button}
                  style={buttonStyles}
                  onClick={openAdditionalInfo}
                  onMouseEnter={() => {
                    set.pause();
                  }}
                  onMouseLeave={() => {
                    set.resume();
                  }}
                >
                  <svg className={css.cart_icon}>
                    <use href={icons + "#cart"}></use>
                  </svg>
                </animated.button>

                {transitions((style, isTrue) => {
                  switch (isTrue) {
                    case true:
                      return (
                        <ModalWrapper
                          closeModal={closeAdditionalInfo}
                          style={style}
                        >
                          <SingleCourseAdditionalInfo
                            fullPrice="34"
                            discountedPrice="18"
                            currency="د.ل"
                            hours="40"
                            purchasedTimes="30"
                            degree="متقدم"
                            language="العربية"
                          />
                        </ModalWrapper>
                      );

                    default:
                      return null;
                  }
                })}
              </>
            )}
            <SingleCourseDetails />
          </div>

          {isMediumScreen && (
            <SingleCourseAdditionalInfo
              fullPrice="34"
              discountedPrice="18"
              currency="د.ل"
              hours="40"
              purchasedTimes="30"
              degree="متقدم"
              language="العربية"
            />
          )}
        </div>
      </section>
    </>
  );
};

export default SingleCourse;
