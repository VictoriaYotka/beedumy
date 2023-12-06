import css from "./NewsHeader.module.scss";

const NewsHeader = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h3 className={css.heading}>مقالاتنا</h3>
        <ul className={css.list}>
          <li className={css.item}>تربوية </li>
          <li className={css.item}> توجيهية </li>
          <li className={css.item}>نفسية </li>
          <li className={css.item}> تعليمية </li>
          <li className={css.item}> باكالوريا</li>
        </ul>
      </div>
    </section>
  );
};

export default NewsHeader;
