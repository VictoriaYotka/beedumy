import css from "./TeacherCard.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import { Link } from "react-router-dom";

const TeacherCard = ({ img, name, occupation, descr }) => {
  return (
    <div className={css.item_thumb}>
      <div className={css.item}>
        <Link>
          <div className={css.teacher_thumb}>
            <div className={css.image_thumb}>
              {img ? (
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className={css.teacher_image}
                />
              ) : (
                <svg className={css.placeholder_icon}>
                  <use href={icons + "#user"}></use>
                </svg>
              )}
            </div>
            <h4 className={css.name}>{name}</h4>
            <h5 className={css.occupation}>{occupation}</h5>
            <p className={css.descr}>{descr}</p>
          </div>
        </Link>
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
                <use href={icons + "#instagram"}></use>
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
                <use href={icons + "#pinterest"}></use>
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
      </div>
    </div>
  );
};

export default TeacherCard;
