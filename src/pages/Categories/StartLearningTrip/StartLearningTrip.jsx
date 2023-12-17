import css from "./StartLearningTrip.module.scss";
import headphones from "../../../assets/images/categories/headphones.jpg";
import cloud from "../../../assets/images/categories/cloud.jpg";
import papers from "../../../assets/images/categories/papers.jpg";
import search from "../../../assets/images/categories/search.jpg";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const StartLearningTrip = () => {
  return (
    <SectionAnimationWrapper>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className={css.heading}>
            كيف أبدأ رحلة <span className={css.heading_accent}>التعلم</span>
          </h2>
          <p className={css.descr}>
            سهولة غير مسبوقة في الوصول للفيديوهات التعليمية باستعراض جميع
            المناهج بطريقة بسيطة وسريعة.
          </p>
          <ul className={css.list}>
            {/* paper img */}
            <li className={css.item}>
              <p className={css.count_accent}>1</p>
              <div className={css.thumb}>
                <span className={css.img_descr}>أسجل</span>
                <img src={papers} alt="أسجل" className={css.img} />
              </div>
            </li>
            {/* search img */}
            <li className={css.item}>
              <p className={css.count}>2</p>
              <div className={css.thumb}>
                <span className={css.img_descr}>أبحث</span>
                <img src={search} alt="أبحث" className={css.img} />
              </div>
            </li>
            {/* cloud img */}
            <li className={css.item}>
              <p className={css.count_accent}>3</p>
              <div className={css.thumb}>
                <span className={css.img_descr}>أشتري</span>
                <img src={cloud} alt="أشتري" className={css.img} />
              </div>
            </li>
            {/* headphones img */}
            <li className={css.item}>
              <p className={css.count}>4</p>
              <div className={css.thumb}>
                <span className={css.img_descr}>أتعلّم</span>
                <img src={headphones} alt="أتعلّم" className={css.img} />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </SectionAnimationWrapper>
  );
};

export default StartLearningTrip;
