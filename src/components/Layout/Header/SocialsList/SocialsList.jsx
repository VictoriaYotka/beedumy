import css from "./SocialsList.module.scss";
import icons from "../../../../assets/images/icons/icons.svg";

const SocialsList = () => {
  return (
    <ul className={css.socials}>
      <li>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={css.social_link}
        >
          <svg className={css.icon}>
            <use href={icons + "#facebook"}></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={css.social_link}
        >
          <svg className={css.icon}>
            <use href={icons + "#google-plus"}></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={css.social_link}
        >
          <svg className={css.icon}>
            <use href={icons + "#linkedin"}></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={css.social_link}
        >
          <svg className={css.icon}>
            <use href={icons + "#twitter"}></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default SocialsList;
