import css from "./ArticleCard.module.scss";

const ArticleCard = ({ date, name, content }) => {
  return (
    <div className={css.item}>
      <div className={css.date_wrapper}>
        <p className={css.date}>{date}</p>
      </div>
      <p className={css.name}>{name}</p>
      <p className={css.content}>{content}</p>
    </div>
  );
};

export default ArticleCard;
