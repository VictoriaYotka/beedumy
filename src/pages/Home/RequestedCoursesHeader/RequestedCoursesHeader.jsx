import css from "./RequestedCoursesHeader.module.scss";

const RequestedCoursesHeader = ({ heading, background }) => {
  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.heading}>
          المواد التعليميّة و الدّورات المرتقبة و الأكثر طلبا
        </h2>
      </div>
      <div className={css.triangle}></div>
    </section>
  );
};

export default RequestedCoursesHeader;
