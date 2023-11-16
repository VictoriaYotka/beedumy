import { Link } from "react-router-dom";
import css from "./Categories.module.scss";

const Categories = () => {
  // const arr = [];
  // fetch for arr

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.heading}>
          هنا تبدأ رحلتك <br /> من العِلم إلى العَمل
        </h2>
        <ul className={css.list}>
          <li className={css.item}>
            <div className={css.color_1}>
              <div className={css.icon}>
                <i class="kipso-icon-desktop"></i>
              </div>
              <h3 className={css.title}>
                <Link href="#">دورات في الإعلامية</Link>
              </h3>
            </div>
          </li>

          <li className={css.item}>
            <div className={css.color_2}>
              <div className={css.icon}>
                <i className="kipso-icon-web-programming"></i>
              </div>
              <h3 className={css.title}>
                <Link href="#">دورات في البرمجة</Link>
              </h3>
            </div>
          </li>

          <li className={css.item}>
            <div className={css.color_3}>
              <div className={css.icon}>
                <i className="kipso-icon-music-player"></i>
              </div>
              <h3 className={css.title}>
                <Link href="#">دورات في Autodesk</Link>
              </h3>
            </div>
          </li>

          <li className={css.item}>
            <div className={css.color_4}>
              <div className={css.icon}>
                <i className="kipso-icon-camera"></i>
              </div>
              <h3 className={css.title}>
                <Link href="#">دورات في اللغات</Link>
              </h3>
            </div>
          </li>

          <li className={css.item}>
            <div className={css.color_5}>
              <div className={css.icon}>
                <i className="kipso-icon-targeting"></i>
              </div>
              <h3 className={css.title}>
                <Link href="#">المنهج الليبيي</Link>
              </h3>
            </div>
          </li>

          <li className={css.item}>
            <div className={css.color_6}>
              <div className={css.icon}>
                <i className="kipso-icon-health"></i>
              </div>
              <h3 className={css.title}>
                <Link href="#">المنهج التونسي</Link>
              </h3>
            </div>
          </li>
        </ul>
        <button className={css.button}>تصفح جميع المحاور</button>
      </div>
    </section>
  );
};

export default Categories;
