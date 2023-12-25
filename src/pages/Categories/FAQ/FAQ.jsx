import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";
import css from "./FAQ.module.scss";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <SectionAnimationWrapper>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className={css.heading}>{t("categories.faq_header")}</h2>
          <ul className={css.list}>
            <li className={css.item}>
              <div className={css.icon_1}>
                <span>?</span>
              </div>
              <div className={css.wrapper}>
                <h3 className={css.item_heading}>
                  {t("categories.faq_participate_question")}
                </h3>
                <p className={css.descr}>
                  {t("categories.faq_participate_answer")}
                </p>
              </div>
            </li>
            <li className={css.item}>
              <div className={css.icon_2}>
                <span>?</span>
              </div>
              <div className={css.wrapper}>
                <h3 className={css.item_heading}>
                  {t("categories.faq_offers_question")}
                </h3>
                <p className={css.descr}>{t("categories.faq_offers_answer")}</p>
              </div>
            </li>
            <li className={css.item}>
              <div className={css.icon_3}>
                <span>?</span>
              </div>
              <div className={css.wrapper}>
                <h3 className={css.item_heading}>
                  {t("categories.faq_birsa_question")}
                </h3>
                <p className={css.descr}>{t("categories.faq_birsa_answer")}</p>
              </div>
            </li>
            <li className={css.item}>
              <div className={css.icon_4}>
                <span>?</span>
              </div>
              <div className={css.wrapper}>
                <h3 className={css.item_heading}>
                  {t("categories.faq_register_question")}
                </h3>
                <p className={css.descr}>
                  {t("categories.faq_register_answer")}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </SectionAnimationWrapper>
  );
};

export default FAQ;
