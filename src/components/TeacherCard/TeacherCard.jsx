import css from "./TeacherCard.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import hero_image_sm from "../../assets/images/home/hero/image_sm.webp";
import { Link } from "react-router-dom";

const TeacherCard = () => {
  return (
    <div className={css.item_thumb}>
      <div className={css.item}>
        <Link>
          <div className={css.teacher_thumb}>
            <img
              src={hero_image_sm}
              alt=""
              loading="lazy"
              className={css.teacher_image}
            />
            <h4 className={css.name}>Teacher's name</h4>
            <h5 className={css.occupation}>Occupation</h5>
            <p className={css.descr}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
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
