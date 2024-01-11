import css from "./Hero.module.scss";
import { animated, useSpring } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import hero_image_sm from "../../../assets/images/home/hero/image_sm.webp";
import hero_image_md from "../../../assets/images/home/hero/image_md.webp";
import hero_image_lg from "../../../assets/images/home/hero/image_lg.webp";
import triangle_blue_big_sm from "../../../assets/images/home/hero/triangle-blue-big_sm.webp";
import triangle_blue_big_md from "../../../assets/images/home/hero/triangle-blue-big_md.webp";
import triangle_blue_big_lg from "../../../assets/images/home/hero/triangle-blue-big_lg.webp";
import triangle_blue_sm from "../../../assets/images/home/hero/triangle-blue_sm.webp";
import triangle_blue_lg from "../../../assets/images/home/hero/triangle-blue_lg.webp";
import triangle_green_sm from "../../../assets/images/home/hero/triangle-green_sm.webp";
import triangle_green_lg from "../../../assets/images/home/hero/triangle-green_lg.webp";
import triangle_green_little_sm from "../../../assets/images/home/hero/triangle-green-little_sm.webp";
import triangle_green_little_lg from "../../../assets/images/home/hero/triangle-green-little_lg.webp";
import triangle_rose_sm from "../../../assets/images/home/hero/triangle-rose_sm.webp";
import triangle_rose_lg from "../../../assets/images/home/hero/triangle-rose_lg.webp";
import { Link } from "react-router-dom";
import { useConditionalSpring } from "../../../utils";

const Hero = () => {
  const { t } = useTranslation();

  const sectionStyles = useSpring({
    ...useConditionalSpring.useHeroSectionStyles,
  });

  const heroImageStyles = useSpring({
    ...useConditionalSpring.useHeroImageStyles,
  });

  const triangleBlueBigStyles = useSpring({
    ...useConditionalSpring.useTriangleBlueBigStyles,
  });

  const triangleBlueStyles = useSpring({
    ...useConditionalSpring.useTriangleBlueStyles,
  });

  const triangleGreenSmallStyles = useSpring({
    ...useConditionalSpring.useTriangleGreenSmallStyles,
  });

  const triangleRoseStyles = useSpring({
    ...useConditionalSpring.useTriangleRoseStyles,
  });

  const triangleGreenStyles = useSpring({
    ...useConditionalSpring.useTriangleGreenStyles,
  });

  const [buttonStyles, set] = useSpring(() => ({
    ...useConditionalSpring.useButtonStyles,
  }));

  return (
    <animated.section className={css.hero_section} style={sectionStyles}>
      <div className={css.hero_container}>
        <div className={css.picture_wrapper}>
          <picture>
            <source media="(max-width: 767px)" srcSet={hero_image_sm} />
            <source media="(max-width: 991px)" srcSet={hero_image_md} />
            <source media="(min-width: 992px)" srcSet={hero_image_lg} />
            <animated.img
              src={hero_image_sm}
              alt="decor"
              className={css.hero_image}
              style={heroImageStyles}
            />
          </picture>

          <picture>
            <source media="(max-width: 767px)" srcSet={triangle_blue_big_sm} />
            <source media="(max-width: 991px)" srcSet={triangle_blue_big_md} />
            <source media="(min-width: 992px)" srcSet={triangle_blue_big_lg} />
            <animated.img
              src={triangle_blue_big_sm}
              alt="decor"
              className={css.triangle_blue_big}
              style={triangleBlueBigStyles}
            />
          </picture>

          <picture>
            <source media="(max-width: 767px)" srcSet={triangle_blue_sm} />
            <source media="(min-width: 768px)" srcSet={triangle_blue_lg} />
            <animated.img
              src={triangle_blue_sm}
              alt="decor"
              className={css.triangle_blue}
              style={triangleBlueStyles}
            />
          </picture>

          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={triangle_green_little_sm}
            />
            <source
              media="(min-width: 768px)"
              srcSet={triangle_green_little_lg}
            />
            <animated.img
              src={triangle_green_little_sm}
              alt="decor"
              className={css.triangle_green_small}
              style={triangleGreenSmallStyles}
            />
          </picture>

          <picture>
            <source media="(max-width: 767px)" srcSet={triangle_rose_sm} />
            <source media="(min-width: 768px)" srcSet={triangle_rose_lg} />
            <animated.img
              src={triangle_rose_sm}
              alt="decor"
              className={css.triangle_rose}
              style={triangleRoseStyles}
            />
          </picture>
        </div>
        <div className={css.content}>
          <picture>
            <source media="(max-width: 767px)" srcSet={triangle_green_sm} />
            <source media="(min-width: 768px)" srcSet={triangle_green_lg} />
            <animated.img
              src={triangle_green_sm}
              alt="decor"
              className={css.triangle_green}
              style={triangleGreenStyles}
            />
          </picture>
          <h1 className={css.heading}>
            <span className={css.heading_colored}>
              {t("home.hero_heading_colored")}
            </span>
            {t("home.hero_heading")}
          </h1>
          <p className={css.subheading}>{t("home.hero_subheading")}</p>
          <animated.button
            className={css.hero_button}
            style={buttonStyles}
            onMouseEnter={() => {
              set.pause();
            }}
            onMouseLeave={() => {
              set.resume();
            }}
          >
            <Link to="/categories">{t("home.hero_button")}</Link>
          </animated.button>
        </div>
      </div>
    </animated.section>
  );
};

export default Hero;
