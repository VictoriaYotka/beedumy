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
      header={t("sign.forgot_password_header")}
      subheader={t("sign.forgot_password_subheader")}
      button={t("sign.forgot_password_button")}
    >
      <div className={css.input_wrapper}>
        <input
          type="email"
          name="forgot_password_email"
          id="forgot_password_email"
          className={css.input}
          placeholder=" "
          required
        />
        <label className={css.label} htmlFor="forgot_password_email">
          {t("sign.email")}
        </label>
      </div>
    </SignWrapper>
  );
};

export default ForgotPassword;
