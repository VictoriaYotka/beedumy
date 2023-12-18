import css from "./Hero.module.scss";
import { animated, useSpring } from "@react-spring/web";
import hero_image from "../../../assets/images/home/hero/image.webp";
import triangle_blue_big from "../../../assets/images/home/hero/triangle-blue-big.webp";
import triangle_blue from "../../../assets/images/home/hero/triangle-blue.webp";
import triangle_green from "../../../assets/images/home/hero/triangle-green.webp";
import triangle_green_small from "../../../assets/images/home/hero/triangle-green-small.webp";
import triangle_rose from "../../../assets/images/home/hero/triangle-rose.webp";

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
      { scale: 1.1, boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.4)" },
      { scale: 1.1, boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.5)" },
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
      tension: 170,
      friction: 26,
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
      tension: 190,
      friction: 14,
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
      tension: 180,
      friction: 12,
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
      tension: 310,
      friction: 20,
      transition: "0.4s ease-in-out",
    },
  });

  const triangleRoseStyles = useSpring({
    reset: true,
    loop: true,
    from: { rotateZ: 0, scale: 0.9, x: 0 },
    to: { rotateZ: 10, scale: 1, x: 10 },

    config: {
      mass: 10,
      tension: 320,
      friction: 23,
      transition: "0.4s ease-in-out",
    },
  });

  const triangleGreenStyles = useSpring({
    reset: true,
    loop: true,
    from: { rotateZ: 0, scale: 0.9 },
    to: [
      { rotateZ: 20, scale: 1 },
      { rotateZ: 10, scale: 1.1 },
      { rotateZ: 0, scale: 1.2 },
      { rotateZ: 20, scale: 0.9 },
      { rotateZ: 10, scale: 1 },
      { rotateZ: 0, scale: 0.9 },
    ],
    config: {
      mass: 4,
      tension: 310,
      friction: 120,
      transition: "0.4s ease-in-out",
    },
  });

  return (
    <animated.section className={css.hero_section} style={sectionStyles}>
      <div className={css.hero_container}>
        <div className={css.picture}>
          <animated.img
            src={hero_image}
            alt="decor"
            loading="lazy"
            className={css.hero_image}
            style={heroImageStyles}
          />
          <animated.img
            src={triangle_blue_big}
            alt="decor"
            loading="lazy"
            className={css.triangle_blue_big}
            style={triangleBlueBigStyles}
          />
          <animated.img
            src={triangle_blue}
            alt="decor"
            loading="lazy"
            className={css.triangle_blue}
            style={triangleBlueStyles}
          />
          <animated.img
            src={triangle_green_small}
            alt="decor"
            loading="lazy"
            className={css.triangle_green_small}
            style={triangleGreenSmallStyles}
          />
          <animated.img
            src={triangle_rose}
            alt="decor"
            loading="lazy"
            className={css.triangle_rose}
            style={triangleRoseStyles}
          />
        </div>
        <div className={css.content}>
          <animated.img
            src={triangle_green}
            alt="decor"
            loading="lazy"
            className={css.triangle_green}
            style={triangleGreenStyles}
          />
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
