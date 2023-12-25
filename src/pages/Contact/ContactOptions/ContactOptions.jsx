import css from "./ContactOptions.module.scss";
import { useTranslation } from "react-i18next";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const ContactOptions = () => {
  const { t } = useTranslation();

  return (
    <SectionAnimationWrapper>
      <div className={css.container}>
        <ul className={css.list}>
          <li className={css.item}>
            <div className={css.color_3}>
              <div className={css.icon}>
                <i className="kipso-icon-contact"></i>
              </div>
            </div>
            <h3 className={css.title}>
              {t("contact.contact_options_via_header")}
            </h3>
            <ul>
              <li>
                <a
                  href="mailto:contact@birsaplatform.com"
                  className={css.contact_link}
                >
                  contact@birsaplatform.com
                </a>
              </li>
              <li>
                <a href="tel:+21670253734" className={css.contact_link}>
                  +216 253 734 70
                  <span>{t("contact.contact_options_via_tunisia")}</span>
                </a>
              </li>
              <li>
                <a href="tel:+21670253734" className={css.contact_link}>
                  +218 548 85698
                  <span>{t("contact.contact_options_via_libya")}</span>
                </a>
              </li>
            </ul>
          </li>
          <li className={css.item}>
            <div className={css.color_2}>
              <div className={css.icon}>
                <i className="kipso-icon-placeholder"></i>
              </div>
            </div>
            <h3 className={css.title}>
              {t("contact.contact_options_address_header")}
            </h3>
            <p>{t("contact.contact_options_address")}</p>
          </li>
          <li className={css.item}>
            <div className={css.color_1}>
              <div className={css.icon}>
                <i className="kipso-icon-manager"></i>
              </div>
            </div>
            <h3 className={css.title}>
              {t("contact.contact_options_about_header")}
            </h3>
            <p>{t("contact.contact_options_about")}</p>
          </li>
        </ul>
      </div>
    </SectionAnimationWrapper>
  );
};

export default ContactOptions;
