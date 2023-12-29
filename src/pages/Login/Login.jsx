import { Link } from "react-router-dom";
import css from "./Login.module.scss";
import { useTranslation } from "react-i18next";
import TriangleBackground from "../../components/Layout/TriangleBackground/TriangleBackground";
import SectionAnimationWrapper from "../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const Login = () => {
  const { t } = useTranslation();

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    console.dir(e.target);
  };

  return (
    <TriangleBackground>
      <SectionAnimationWrapper>
        <div className={css.container}>
          <form onSubmit={handleLoginFormSubmit} className={css.form}>
            <div className={css.input_wrapper}>
              <label className={css.label} htmlFor="login_email">
                {t("sign.email")}
              </label>
              <input
                type="email"
                name="login_email"
                id="login_email"
                className={css.input}
                // placeholder="email"
                required
              />
            </div>
            <div className={css.input_wrapper}>
              <label className={css.label} htmlFor="login_password">
                {t("sign.password")}
              </label>
              <input
                type="password"
                name="login_password"
                id="login_password"
                className={css.input}
                // placeholder="password"
                required
              />
            </div>

            <div className={css.wrapper}>
              <button className={css.button} type="submit">
                {t("sign.login_button")}
              </button>
              <div className={css.inner_wrapper}>
                <p className={css.descr}>{t("sign.register_instead")}</p>
                <Link to="/register" className={css.link_button}>
                  {t("sign.register_button")}
                </Link>
              </div>
            </div>
          </form>
        </div>
      </SectionAnimationWrapper>
    </TriangleBackground>
  );
};

export default Login;
