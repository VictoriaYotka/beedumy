import css from "./StartLearningTrip.module.scss";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <SectionAnimationWrapper>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className={css.heading}>
            {t("categories.start_learning_trip_header")}
            <span className={css.heading_accent}>
              {t("categories.start_learning_trip_header_accent")}
            </span>
          </h2>
          <p className={css.descr}>
            {t("categories.start_learning_trip_descr")}
          </p>
          <ul className={css.list}>
            {/* register */}
            <li className={css.item}>
              <p className={css.count_accent}>1</p>
              <div className={css.thumb}>
                <span className={css.img_descr}>
                  {t("categories.start_learning_trip_register_step")}
                </span>

                <picture>
                  <source media="(max-width: 767px)" srcSet={papers_sm} />
                  <source media="(min-width: 768px)" srcSet={papers_lg} />
                  <img
                    src={papers_sm}
                    alt={t("categories.start_learning_trip_register_step")}
                    className={css.img}
                  />
                </picture>
              </div>
            </li>
            {/* search */}
            <li className={css.item}>
              <p className={css.count}>2</p>
              <div className={css.thumb}>
                <span className={css.img_descr}>
                  {t("categories.start_learning_trip_search_step")}
                </span>
                <picture>
                  <source media="(max-width: 767px)" srcSet={search_sm} />
                  <source media="(min-width: 768px)" srcSet={search_lg} />
                  <img
                    src={search_sm}
                    alt={t("categories.start_learning_trip_search_step")}
                    className={css.img}
                  />
                </picture>
              </div>
            </li>
            {/* buy */}
            <li className={css.item}>
              <p className={css.count_accent}>3</p>
              <div className={css.thumb}>
                <span className={css.img_descr}>
                  {t("categories.start_learning_trip_buy_step")}
                </span>
                <picture>
                  <source media="(max-width: 767px)" srcSet={cloud_sm} />
                  <source media="(min-width: 768px)" srcSet={cloud_lg} />
                  <img
                    src={cloud_sm}
                    alt={t("categories.start_learning_trip_buy_step")}
                    className={css.img}
                  />
                </picture>
              </div>
            </li>
            {/* know */}
            <li className={css.item}>
              <p className={css.count}>4</p>
              <div className={css.thumb}>
                <span className={css.img_descr}>
                  {t("categories.start_learning_trip_know_step")}
                </span>
                <picture>
                  <source media="(max-width: 767px)" srcSet={headphones_sm} />
                  <source media="(min-width: 768px)" srcSet={headphones_lg} />
                  <img
                    src={headphones_sm}
                    alt={t("categories.start_learning_trip_know_step")}
                    className={css.img}
                  />
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
