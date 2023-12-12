import css from "./NewsHeaderList.module.scss";

const NewsHeaderList = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}> باكالوريا</li>
      <li className={css.item}> تعليمية </li>
      <li className={css.item}>نفسية </li>
      <li className={css.item}> توجيهية </li>
      <li className={css.item}>تربوية </li>
    </ul>
  );
};

export default NewsHeaderList;
