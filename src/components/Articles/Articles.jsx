import css from "./Articles.module.scss";

const Articles = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.heading}>
          مقالات وتوجيهات <br />
          تربوية ومهنية
        </h2>
        <ul className={css.list}>
          <li className={css.item}>
            <div className={css.date_wrapper}>
              <p className={css.date}>06 أوت</p>
            </div>
            <p className={css.name}>كُتب بواسطة آدم . 12 تعليق</p>
            <p className={css.content}>
              أثر التعليم التفاعلي في مناهج التعليم الحديثة في نفسية الطفل
            </p>
          </li>
          <li className={css.item}>
            <div className={css.date_wrapper}>
              <p className={css.date}>06 أوت</p>
            </div>
            <p className={css.name}>كُتب بواسطة آدم . 12 تعليق</p>
            <p className={css.content}>
              أثر التعليم التفاعلي في مناهج التعليم الحديثة في نفسية الطفل
            </p>
          </li>
          <li className={css.item}>
            <div className={css.date_wrapper}>
              <p className={css.date}>06 أوت</p>
            </div>
            <p className={css.name}>كُتب بواسطة آدم . 12 تعليق</p>
            <p className={css.content}>
              أثر التعليم التفاعلي في مناهج التعليم الحديثة في نفسية الطفل
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Articles;
