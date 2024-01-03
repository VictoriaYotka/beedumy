import css from "./Sign.module.scss";
import { useTranslation } from "react-i18next";
import SignWrapper from "../../components/SignWrapper/SignWrapper";

const ForgotPassword = () => {
  const { t } = useTranslation();

  const handleRegisterFormSubmit = (e) => {
    e.preventDefault();
    console.dir(e.target);
  };
  return (
    <SignWrapper
      onSubmit={handleRegisterFormSubmit}
      header={t("sign.update_password_header")}
      subheader={t("sign.update_password_subheader")}
      button={t("sign.update_password_button")}
    >
      <div className={css.input_wrapper}>
        <input
          type="password"
          name="update_password_password"
          id="update_password_password"
          className={css.input}
          placeholder=" "
          required
        />
        <label className={css.label} htmlFor="update_password_password">
          {t("sign.password")}
        </label>
      </div>

      <div className={css.input_wrapper}>
        <input
          type="password"
          name="update_password_confirm"
          id="update_password_confirm"
          className={css.input}
          placeholder=" "
          required
        />
        <label className={css.label} htmlFor="update_password_confirm">
          {t("sign.password_confirmation")}
        </label>
      </div>
    </SignWrapper>
  );
};

export default ForgotPassword;
