import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import css from "./Subscription.module.scss";

const Subscription = () => {
  return (
    <SectionAnimationWrapper>
      <section className={css.section}>
        <div className={css.container}>
          <div className={css.heading_wrapper}>
            <div className={css.icon_wrapper}>
              <i className="kipso-icon-email"></i>
            </div>
            <h2 className={css.heading}>
              سجل الآن لتصلك آخر المستجدات والعروض
            </h2>
          </div>
          <form className={css.form}>
            <input
              className={css.input}
              type="email"
              placeholder="فضلا إدخال البريد الإلكتروني"
              required
            />
            <button className={css.button}>التسجيل</button>
          </form>
        </div>
      </section>
    </SectionAnimationWrapper>
  );
};

export default Subscription;
