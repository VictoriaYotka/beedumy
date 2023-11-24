import css from "./Subscription.module.scss";

const Subscription = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <form className={css.form}>
          <button className={css.button}>التسجيل</button>
          <input
            className={css.input}
            type="email"
            placeholder="فضلا إدخال البريد الإلكتروني"
            required
          />
        </form>
        <div className={css.heading_wrapper}>
          <h2 className={css.heading}>سجل الآن لتصلك آخر المستجدات والعروض</h2>
          <div className={css.icon_wrapper}>
            <i className="kipso-icon-email"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
