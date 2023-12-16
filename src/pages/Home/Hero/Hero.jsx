import css from "./Hero.module.scss";
import hero_image from "../../../assets/images/home/hero/image.png";
import triangle_blue_big from "../../../assets/images/home/hero/triangle-blue-big.png";
import triangle_blue from "../../../assets/images/home/hero/triangle-blue.png";
import triangle_green from "../../../assets/images/home/hero/triangle-green.png";
import triangle_green_small from "../../../assets/images/home/hero/triangle-green-small.png";
import triangle_rose from "../../../assets/images/home/hero/triangle-rose.png";

const Hero = () => {
  return (
    <section className={css.hero_section}>
      <div className={css.hero_container}>
        <div className={css.picture}>
          <img src={hero_image} alt="decor" className={css.hero_image} />
          <img
            src={triangle_blue_big}
            alt="decor"
            className={css.triangle_blue_big}
          />
          <img src={triangle_blue} alt="decor" className={css.triangle_blue} />
          <img
            src={triangle_green_small}
            alt="decor"
            className={css.triangle_green_small}
          />
          <img src={triangle_rose} alt="decor" className={css.triangle_rose} />
        </div>
        <div className={css.content}>
          <img
            src={triangle_green}
            alt="decor"
            className={css.triangle_green}
          />
          <h1 className={css.heading}>
            <span className={css.heading_colored}>منصة بيرسا </span>التعليمية
          </h1>
          <p className={css.subheading}>
            نقدم محتوى تعليمي يشرح المناهج الدراسية بشكل مبسّط وسلس إضافة إلى
            دورات في اختصاصات متعددة نفتح لك بها آفاقا جديدة
          </p>
          <button className={css.hero_button}>ابدأ رحلة التعلم الآن</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
