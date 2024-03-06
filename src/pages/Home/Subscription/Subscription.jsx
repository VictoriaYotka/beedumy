import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import css from "./Subscription.module.scss";
import { useTranslation } from "react-i18next";

const Subscription = ({ handleSubscriptionFormSubmit }) => {
  const { t } = useTranslation();

  return (
    <SectionAnimationWrapper>
      <section className={css.section}>
        <div className={css.container}>
          <div className={css.heading_wrapper}>
            <div className={css.icon_wrapper}>
              <i className="kipso-icon-email"></i>
            </div>
            <h2 className={css.heading}>{t("home.subscription_header")}</h2>
          </div>
          <form className={css.form} onSubmit={handleSubscriptionFormSubmit}>
            <input
              className={css.input}
              type="email"
              name="subscription_email"
              id="subscription_email"
              placeholder={t("home.subscription_input_placeholder")}
              required
            />
            <button className={css.button}>
              {t("home.subscription_button")}
            </button>
          </form>
        </div>
      </section>
    </SectionAnimationWrapper>
  );
};

export default Subscription;
