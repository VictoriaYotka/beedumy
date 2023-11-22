import { Link } from "react-router-dom";
import css from "./Teachers.module.scss";
import icons from "../../assets/images/icons/icons.svg";
import hero_image from "../../assets/images/home/hero/image.png";
import Slider from "react-slick";

const Teachers = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.heading}>
          تعرّف على نخبة من <br />
          الأساتذة والمختصّين
        </h2>
        <Slider {...settings}>
          <div>
            <div className={css.item_thumb}>
              <div className={css.item}>
                <Link>
                  <div className={css.teacher_thumb}>
                    <img
                      src={hero_image}
                      alt=""
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
          </div>
          <div>
            <div className={css.item_thumb}>
              <div className={css.item}>
                <Link>
                  <div className={css.teacher_thumb}>
                    <img
                      src={hero_image}
                      alt=""
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
          </div>
          <div>
            <div className={css.item_thumb}>
              <div className={css.item}>
                <Link>
                  <div className={css.teacher_thumb}>
                    <img
                      src={hero_image}
                      alt=""
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
          </div>
        </Slider>
        <Link className={css.button}>نظرة على بقية المختصّين</Link>
      </div>
    </section>
  );
};

export default Teachers;
