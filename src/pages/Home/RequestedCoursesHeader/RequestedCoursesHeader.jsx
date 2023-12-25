import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import css from "./RequestedCoursesHeader.module.scss";
import { useTranslation } from "react-i18next";

const RequestedCoursesHeader = () => {
  const { t } = useTranslation();

  return (
    <SectionAnimationWrapper>
      <section className={css.section}>
        <div className="container">
          <h2 className={css.heading}>{t("home.requested_courses_header")}</h2>
        </div>
      </section>
    </SectionAnimationWrapper>
  );
};

export default RequestedCoursesHeader;
