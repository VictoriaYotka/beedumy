import css from "./LearnMore.module.scss";
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.heading}>
          نوفّر تجربة تعليميّة تفاعليّة ونفتح آفاقا معرفيّة جديدة
        </h2>
        <Link to="/courses" className={css.button}>
          تعرّف أكثر
        </Link>
      </div>
    </section>
  );
};

export default LearnMore;
