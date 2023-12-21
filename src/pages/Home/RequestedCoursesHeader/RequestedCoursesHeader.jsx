import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import css from "./RequestedCoursesHeader.module.scss";

const RequestedCoursesHeader = ({ heading, background }) => {
  return (
    <SectionAnimationWrapper>
      <section className={css.section}>
        <div className="container">
          <h2 className={css.heading}>
            المواد التعليميّة و الدّورات المرتقبة و الأكثر طلبا
          </h2>
        </div>
      </section>
    </SectionAnimationWrapper>
  );
};

export default RequestedCoursesHeader;
