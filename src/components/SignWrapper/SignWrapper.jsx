import css from "./SignWrapper.module.scss";
import { useTranslation } from "react-i18next";
import TriangleBackground from "../Layout/TriangleBackground/TriangleBackground";
import SectionAnimationWrapper from "../SectionAnimationWrapper/SectionAnimationWrapper";
import { Link, useLocation } from "react-router-dom";

const SignWrapper = ({
  onSubmit,
  header,
  subheader,
  subheaderAccent,
  button,

  children,
}) => {
  const { t } = useTranslation();
  const location = useLocation();

  const getLinkTo = () => {
    switch (location.pathname) {
      case "/register":
        return "/login";
      case "/login":
        return "/register";
      // Add more cases as needed
      default:
        return "/"; // Default fallback link
    }
  };

  return (
    <TriangleBackground>
      <SectionAnimationWrapper>
        <div className={css.container}>
          <form onSubmit={onSubmit} className={css.form}>
            <h2 className={css.header}>{header}</h2>
            <h4 className={css.subheader}>
              {subheader}
              {subheaderAccent && (
                <Link to={getLinkTo()} className={css.accent}>
                  {subheaderAccent}
                </Link>
              )}
            </h4>
            {children}
            <button type="submit" className={css.button}>
              {button}
            </button>
            {location.pathname !== "/login" && (
              <p>
                <span className={css.notion}>
                  {t("sign.already_have_account")}
                </span>
                <Link to="/login" className={css.accent}>
                  {t("sign.login_now")}
                </Link>
              </p>
            )}
          </form>
        </div>
      </SectionAnimationWrapper>
    </TriangleBackground>
  );
};

export default SignWrapper;
