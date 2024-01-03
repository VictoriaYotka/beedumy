import css from "./Sign.module.scss";
import { useTranslation } from "react-i18next";
import SignWrapper from "../../components/SignWrapper/SignWrapper";

const Register = () => {
  const { t } = useTranslation();

  const handleRegisterFormSubmit = (e) => {
    e.preventDefault();
    console.dir(e.target);
  };
  return (
    <SignWrapper
      onSubmit={handleRegisterFormSubmit}
      header={t("sign.register_header")}
      subheader={t("sign.register_subheader")}
      subheaderAccent={t("sign.register_subheader_accent")}
      button={t("sign.register_button")}
    >
      <div className={css.wrapper}>
        <div className={css.input_wrapper}>
          <input
            type="text"
            name="register_first_name"
            id="register_first_name"
            className={css.input}
            placeholder=" "
            required
          />
          <label className={css.label} htmlFor="register_first_name">
            {t("sign.register_first_name")}
          </label>
        </div>

        <div className={css.input_wrapper}>
          <input
            type="text"
            name="register_last_name"
            id="register_last_name"
            className={css.input}
            placeholder=" "
            required
          />
          <label className={css.label} htmlFor="register_last_name">
            {t("sign.register_last_name")}
          </label>
        </div>
      </div>

      <div className={css.input_wrapper}>
        <input
          type="text"
          name="register_phone"
          id="register_phone"
          className={css.input}
          placeholder=" "
          required
        />
        <label className={css.label} htmlFor="register_phone">
          {t("sign.register_phone_number")}
        </label>
      </div>

      <div className={css.input_wrapper}>
        <input
          type="email"
          name="register_email"
          id="register_email"
          className={css.input}
          placeholder=" "
          required
        />
        <label className={css.label} htmlFor="register_email">
          {t("sign.email")}
        </label>
      </div>

      <div className={css.input_wrapper}>
        <input
          type="password"
          name="register_password"
          id="register_password"
          className={css.input}
          placeholder=" "
          required
        />
        <label className={css.label} htmlFor="register_password">
          {t("sign.password")}
        </label>
      </div>
    </SignWrapper>
  );
};

export default Register;
