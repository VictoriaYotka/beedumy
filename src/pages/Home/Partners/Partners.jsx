import css from "./Partners.module.scss";
import acces_canada from "../../../assets/images/home/acces_canada.png";
import british_counsil from "../../../assets/images/home/british_counsil.png";

const Partners = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.heading}>شراكاتنا</h2>
        <ul className={css.list}>
          <li className={css.item}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={css.link}
            >
              <img
                src={acces_canada}
                alt=""
                loading="lazy"
                className={css.image}
              />
            </a>
          </li>
          <li className={css.item}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={css.link}
            >
              <img
                src={british_counsil}
                alt=""
                loading="lazy"
                className={css.image}
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Partners;
