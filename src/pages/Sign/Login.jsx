import css from "./Sign.module.scss";
import { useTranslation } from "react-i18next";
import SignWrapper from "../../components/SignWrapper/SignWrapper";
import { Link } from "react-router-dom";

const Login = () => {
  const { t } = useTranslation();

  const handleRegisterFormSubmit = (e) => {
    e.preventDefault();
    console.dir(e.target);
  };
  return (
    <SignWrapper
      onSubmit={handleRegisterFormSubmit}
      header={t("sign.login_header")}
      subheader={t("sign.login_subheader")}
      subheaderAccent={t("sign.login_subheader_accent")}
      button={t("sign.login_button")}
    >
      <div className={css.input_wrapper}>
        <input
          type="email"
          name="login_email"
          id="login_email"
          className={css.input}
          placeholder=" "
          required
        />
        <label className={css.label} htmlFor="login_email">
          {t("sign.email")}
        </label>
      </div>

      <div className={css.input_wrapper}>
        <input
          type="password"
          name="login_password"
          id="login_password"
          className={css.input}
          placeholder=" "
          required
        />
        <label className={css.label} htmlFor="login_password">
          {t("sign.password")}
        </label>
      </div>
      <Link to="/forgotpassword" className={css.link}>
        {t("sign.login_forgot_password")}
      </Link>

      <div className={css.checkbox_wrapper}>
        <input
          type="checkbox"
          name="login_user_agreement"
          id="login_user_agreement"
          className={css.checkbox_input}
          required
        />
        <label className={css.checkbox_label} htmlFor="login_user_agreement">
          {t("sign.login_user_agreement")}
        </label>
      </div>
    </SignWrapper>
  );
};

export default Login;
