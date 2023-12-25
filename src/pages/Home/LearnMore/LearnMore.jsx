import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import css from "./LearnMore.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LearnMore = () => {
  const { t } = useTranslation();

  return (
    <SectionAnimationWrapper>
      <section className={css.section}>
        <div className="container">
          <h2 className={css.heading}>{t("home.learn_more_header")}</h2>
          <Link to="/courses" className={css.button}>
            {t("home.learn_more_button")}
          </Link>
        </div>
      </section>
    </SectionAnimationWrapper>
  );
};

export default LearnMore;
