import css from "./StartLearningTrip.module.scss";
import headphones_sm from "../../../assets/images/categories/headphones_sm.webp";
import headphones_lg from "../../../assets/images/categories/headphones_lg.webp";
import cloud_sm from "../../../assets/images/categories/cloud_sm.webp";
import cloud_lg from "../../../assets/images/categories/cloud_lg.webp";
import papers_sm from "../../../assets/images/categories/papers_sm.webp";
import papers_lg from "../../../assets/images/categories/papers_lg.webp";
import search_sm from "../../../assets/images/categories/search_sm.webp";
import search_lg from "../../../assets/images/categories/search_lg.webp";
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

                <picture>
                  <source media="(max-width: 767px)" srcSet={papers_sm} />
                  <source media="(min-width: 768px)" srcSet={papers_lg} />
                  <img src={papers_sm} alt="أسجل" className={css.img} />
                </picture>
              </div>
            </li>
            {/* search img */}
            <li className={css.item}>
              <p className={css.count}>2</p>
              <div className={css.thumb}>
                <span className={css.img_descr}>أبحث</span>
                <picture>
                  <source media="(max-width: 767px)" srcSet={search_sm} />
                  <source media="(min-width: 768px)" srcSet={search_lg} />
                  <img src={search_sm} alt="أبحث" className={css.img} />
                </picture>
              </div>
            </li>
            {/* cloud img */}
            <li className={css.item}>
              <p className={css.count_accent}>3</p>
              <div className={css.thumb}>
                <span className={css.img_descr}>أشتري</span>
                <picture>
                  <source media="(max-width: 767px)" srcSet={cloud_sm} />
                  <source media="(min-width: 768px)" srcSet={cloud_lg} />
                  <img src={cloud_sm} alt="أشتري" className={css.img} />
                </picture>
              </div>
            </li>
            {/* headphones img */}
            <li className={css.item}>
              <p className={css.count}>4</p>
              <div className={css.thumb}>
                <span className={css.img_descr}>أتعلّم</span>
                <picture>
                  <source media="(max-width: 767px)" srcSet={headphones_sm} />
                  <source media="(min-width: 768px)" srcSet={headphones_lg} />
                  <img src={headphones_sm} alt="أتعلّم" className={css.img} />
                </picture>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </SectionAnimationWrapper>
  );
};

export default StartLearningTrip;
