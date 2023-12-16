import css from "./ContactOptions.module.scss";

const ContactOptions = () => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <div className={css.color_3}>
            <div className={css.icon}>
              <i className="kipso-icon-contact"></i>
            </div>
          </div>
          <h3 className={css.title}>تواصل معنا عبر</h3>
          <ul>
            <li>
              <a
                href="mailto:contact@birsaplatform.com"
                className={css.contact_link}
              >
                contact@birsaplatform.com
              </a>
            </li>
            <li>
              <a href="tel:+21670253734" className={css.contact_link}>
                +216 253 734 70<span>داخل تونس </span>
              </a>
            </li>
            <li>
              <a href="tel:+21670253734" className={css.contact_link}>
                +218 548 85698<span>داخل ليبيا</span>
              </a>
            </li>
          </ul>
        </li>
        <li className={css.item}>
          <div className={css.color_2}>
            <div className={css.icon}>
              <i className="kipso-icon-placeholder"></i>
            </div>
          </div>
          <h3 className={css.title}>عنواننا</h3>
          <p>01 نهج 02 مارس 1934 قرطاج بيرسا, قرطاج تونس</p>
        </li>
        <li className={css.item}>
          <div className={css.color_1}>
            <div className={css.icon}>
              <i className="kipso-icon-manager"></i>
            </div>
          </div>
          <h3 className={css.title}>عن منصتنا</h3>
          <p>
            نوفّر مواد تعليمية لدعم التلاميذ من جميع الفئـات العمرية. باإضافة
            إلى دورات في اخـتصاصات منعــددة
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ContactOptions;
