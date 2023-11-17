import css from "./Feedback.module.scss";
import hero_image from "../../assets/images/home/hero/image.png";
import icons from "../../assets/images/icons/icons.svg";

const Feedback = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.heading}>
          شهادات تلامذتنا <br />
          عبر مواقع التواصل الاجتماعي
        </h2>
        <ul className={css.list}>
          <li className={css.item}>
            <div className={css.icon_wrapper}>
              <svg className={css.icon}>
                <use href={icons + "#quotes"}></use>
              </svg>
            </div>
            <p className={css.content}>
              التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب وجهد
            </p>
            <img src={hero_image} alt="" className={css.image} />
            <p className={css.name}>إلهام بن عبيد</p>
            <p className={css.descr}>تلميذة</p>
          </li>
          <li className={css.item}>
            <div className={css.icon_wrapper}>
              <svg className={css.icon}>
                <use href={icons + "#quotes"}></use>
              </svg>
            </div>
            <p className={css.content}>
              التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب وجهد
            </p>
            <img src={hero_image} alt="" className={css.image} />
            <p className={css.name}>إلهام بن عبيد</p>
            <p className={css.descr}>تلميذة</p>
          </li>
          <li className={css.item}>
            <div className={css.icon_wrapper}>
              <svg className={css.icon}>
                <use href={icons + "#quotes"}></use>
              </svg>
            </div>
            <p className={css.content}>
              التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب وجهد
            </p>
            <img src={hero_image} alt="" className={css.image} />
            <p className={css.name}>إلهام بن عبيد</p>
            <p className={css.descr}>تلميذة</p>
          </li>
          <li className={css.item}>
            <div className={css.icon_wrapper}>
              <svg className={css.icon}>
                <use href={icons + "#quotes"}></use>
              </svg>
            </div>
            <p className={css.content}>
              التمارين التفاعلية Vraiment حاجة مزيانة برشا نقصتلي برشا تعب وجهد
            </p>
            <img src={hero_image} alt="" className={css.image} />
            <p className={css.name}>إلهام بن عبيد</p>
            <p className={css.descr}>تلميذة</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Feedback;
