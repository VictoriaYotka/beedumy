import css from "./ContactForm.module.scss";
import { useTranslation } from "react-i18next";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <SectionAnimationWrapper>
      <div className={css.container}>
        <h2 className={css.heading}>{t("contact.contact_form_header")}</h2>
        <form className={css.form}>
          <div className={css.wrapper}>
            <input
              type="text"
              name="contact_name"
              id="contact_name"
              className={css.input}
              placeholder={t("contact.contact_form_name")}
              required
            />
            <input
              type="email"
              name="contact_email"
              id="contact_email"
              className={css.input}
              placeholder={t("contact.contact_form_email")}
              required
            />
          </div>

          <textarea
            name="contact_message"
            id="contact_message"
            cols="30"
            rows="5"
            className={css.textarea}
            placeholder={t("contact.contact_form_message")}
          ></textarea>
          <button type="submit" className={css.button}>
            {t("contact.contact_form_button")}
          </button>
        </form>
      </div>
    </SectionAnimationWrapper>
  );
};

export default ContactForm;
