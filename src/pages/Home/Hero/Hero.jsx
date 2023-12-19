import css from "./Hero.module.scss";
import { animated, useSpring } from "@react-spring/web";
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

const Hero = () => {
  const sectionStyles = useSpring({
    from: {
      scale: 0.5,
      opacity: 0,
      transform: "translateY(-100px)",
    },
    to: { scale: 1, opacity: 1, transform: "translateY(0)" },
    config: { transition: "0.4s ease-in-out" },
  });

  const buttonStyles = useSpring({
    reset: true,
    loop: true,
    from: { scale: 0.9, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" },
    to: [
      { scale: 1, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" },
      { scale: 1.1, boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.3)" },
      { scale: 1.1, boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.4)" },
      { scale: 1.1, boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.5)" },
      { scale: 1, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" },
      { scale: 1.1, boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.3)" },
      { scale: 1.1, boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.4)" },
      { scale: 1, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)" },
      { scale: 0.9, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" },
    ],
    config: {
      mass: 5,
      tension: 400,
      friction: 45,
      clamp: true,
      transition: "0.3s ease-in-out",
    },
  });

  const heroImageStyles = useSpring({
    reset: true,
    loop: { reverse: true },
    from: { rotateZ: 0, scale: 0.95 },
    to: { rotateZ: -5, scale: 1 },

    config: {
      mass: 9,
      tension: 50,
      friction: 26,
      clamp: true,
      transition: "0.4s ease-in-out",
    },
  });

  const triangleBlueBigStyles = useSpring({
    reset: true,
    loop: { reverse: true },
    from: { rotateZ: 0, scale: 0.99, x: -5 },
    to: { rotateZ: 2, scale: 1, x: 0 },

    config: {
      mass: 4,
      tension: 60,
      friction: 14,
      clamp: true,
      transition: "0.4s ease-in-out",
    },
  });

  const triangleBlueStyles = useSpring({
    reset: true,
    loop: { reverse: true },
    from: { scale: 0.9, rotateX: 0 },
    to: { scale: 1, rotateX: 10 },
    config: {
      mass: 6,
      tension: 55,
      friction: 12,
      clamp: true,
      transition: "0.4s ease-in-out",
    },
  });

  const triangleGreenSmallStyles = useSpring({
    reset: true,
    loop: true,
    from: { rotateZ: 0, scale: 0.9 },
    to: [
      { rotateZ: 20, scale: 1 },
      { rotateZ: 10, scale: 1.1 },
      { rotateZ: 0, scale: 1.2 },
      { rotateZ: 0, scale: 0.9 },
    ],
    config: {
      mass: 7,
      tension: 70,
      friction: 20,
      clamp: true,
      transition: "0.4s ease-in-out",
    },
  });

  const triangleRoseStyles = useSpring({
    reset: true,
    loop: { reverse: true },
    from: { rotateZ: 0, scale: 0.9, x: 0 },
    to: { rotateZ: 5, scale: 1, x: 10 },

    config: {
      mass: 10,
      tension: 65,
      friction: 23,
      clamp: true,
      transition: "0.4s ease-in-out",
    },
  });

  const triangleGreenStyles = useSpring({
    reset: true,
    loop: { reverse: true },
    from: { rotateZ: 0, scale: 0.9 },
    to: { rotateZ: 10, scale: 1 },
    config: {
      mass: 4,
      tension: 55,
      friction: 20,
      clamp: true,
      transition: "0.4s ease-in-out",
    },
  });

  return (
    <animated.section className={css.hero_section} style={sectionStyles}>
      <div className={css.hero_container}>
        <div className={css.picture}>
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
            <span className={css.heading_colored}>منصة بيرسا </span>التعليمية
          </h1>
          <p className={css.subheading}>
            نقدم محتوى تعليمي يشرح المناهج الدراسية بشكل مبسّط وسلس إضافة إلى
            دورات في اختصاصات متعددة نفتح لك بها آفاقا جديدة
          </p>
          <animated.button className={css.hero_button} style={buttonStyles}>
            ابدأ رحلة التعلم الآن
          </animated.button>
        </div>
      </div>
    </animated.section>
  );
};

export default Hero;
