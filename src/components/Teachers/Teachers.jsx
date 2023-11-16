import { Link } from "react-router-dom";
import css from "./Teachers.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import hero_image from "../../assets/images/hero/image.png";

const Teachers = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.header}>
          تعرّف على نخبة من <br />
          الأساتذة والمختصّين
        </h2>
        <ul className={css.teachers_list}>
          <li className={css.item}>
            <Link>
              <div className={css.teacher_thumb}>
                <img src={hero_image} alt="" className={css.teacher_image} />
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
          </li>
          <li className={css.item}>
            <Link>
              <div className={css.teacher_thumb}>
                <img src={hero_image} alt="" className={css.teacher_image} />
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
          </li>
          <li className={css.item}>
            <Link>
              <div className={css.teacher_thumb}>
                <img src={hero_image} alt="" className={css.teacher_image} />
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
          </li>
        </ul>
        <Link className={css.button}>نظرة على بقية المختصّين</Link>
      </div>
    </section>
  );
};

export default Teachers;
