import { Link } from "react-router-dom";
import css from "./Register.module.scss";
import { useTranslation } from "react-i18next";
import TriangleBackground from "../../components/Layout/TriangleBackground/TriangleBackground";
import SectionAnimationWrapper from "../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const Register = () => {
  const { t } = useTranslation();

  const handleRegisterFormSubmit = (e) => {
    e.preventDefault();
    console.dir(e.target);
  };
  return (
    <TriangleBackground>
      <SectionAnimationWrapper>
        <div className={css.container}>
          <form onSubmit={handleRegisterFormSubmit} className={css.form}>
            <div className={css.input_wrapper}>
              <label className={css.label} htmlFor="register_name">
                {t("sign.name")}
              </label>
              <input
                type="text"
                name="register_name"
                id="register_name"
                className={css.input}
                // placeholder="name"
                required
              />
            </div>
            <div className={css.input_wrapper}>
              <label className={css.label} htmlFor="register_email">
                {t("sign.email")}
              </label>
              <input
                type="email"
                name="register_email"
                id="register_email"
                className={css.input}
                // placeholder="email"
                required
              />
            </div>
            <div className={css.input_wrapper}>
              <label className={css.label} htmlFor="register_password">
                {t("sign.password")}
              </label>
              <input
                type="password"
                name="register_password"
                id="register_password"
                className={css.input}
                // placeholder="password"
                required
              />
            </div>
            <div className={css.input_wrapper}>
              <label className={css.label} htmlFor="register_confirm_password">
                {t("sign.confirm_password")}
              </label>
              <input
                type="password"
                name="register_confirm_password"
                id="register_confirm_password"
                className={css.input}
                // placeholder="password"
                required
              />
            </div>

            <div className={css.wrapper}>
              <button className={css.button} type="submit">
                {t("sign.register_button")}
              </button>
              <div className={css.inner_wrapper}>
                <p className={css.descr}>{t("sign.login_instead")}</p>
                <Link to="/login" className={css.link_button}>
                  {t("sign.login_button")}
                </Link>
              </div>
            </div>
          </form>
        </div>
      </SectionAnimationWrapper>
    </TriangleBackground>
  );
};

export default Register;
