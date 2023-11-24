import { NavLink } from "react-router-dom";
import css from "./MobileApp.module.scss";

const MobileApp = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.info_wrapper}>
          <h2 className={css.heading}>تطبيق منصة بيرسا التعليمية</h2>
          <p className={css.descr}>
            نحاول أن نسهل عملية التعليم عبر تطبيق بيرسا للأجهزةالمحمولة. قم
            بتنزيل تطبيق بيرسا المناسب لهاتفك الذكي أو جهــــــــازك اللوحي،
            ستجد نفس البيئة التعليمية الممتعة تنتقل معك أينما كنت تحديث تطبيق
            منصة بيرسا التعليمية تتم بشكل آلي بدون إزعاجك.
          </p>
          <NavLink className={css.button}>حمّل التطبيق الآن</NavLink>
        </div>
        <div className={css.video_wrapper}>
          <div className={css.video}>
            <div className={css.video_button}>
              <a href="#" className={css.video_popup}>
                <i className={css.video_icon}>&#9654;</i>
              </a>
            </div>
          </div>
          <p className={css.video_descr}>
            تطبيقنا متوفر على الهاتف و الأجهزة الوحية
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
