import css from "./NewsHeaderList.module.scss";
import { useTranslation } from "react-i18next";

const NewsHeaderList = () => {
  const { t } = useTranslation();

  return (
    <ul className={css.list}>
      <li className={css.item}>{t("news.header_list_baccalaureate")}</li>
      <li className={css.item}>{t("news.header_list_educational")}</li>
      <li className={css.item}>{t("news.header_list_psycological")}</li>
      <li className={css.item}>{t("news.header_list_directive")}</li>
      <li className={css.item}>{t("news.header_list_pedagogical")}</li>
    </ul>
  );
};

export default NewsHeaderList;
