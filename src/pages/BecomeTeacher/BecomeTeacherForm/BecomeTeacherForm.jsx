import css from "./BecomeTeacherForm.module.scss";
import { useTranslation } from "react-i18next";
import TriangleBackground from "../../../components/Layout/TriangleBackground/TriangleBackground";
import SectionAnimationWrapper from "../../../components/SectionAnimationWrapper/SectionAnimationWrapper";

const BecomeTeacherForm = ({ handleBecomeTeacherFormSubmit }) => {
  const { t } = useTranslation();

  return (
    <TriangleBackground>
      <SectionAnimationWrapper>
        <div className={css.container}>
          <form className={css.form} onSubmit={handleBecomeTeacherFormSubmit}>
            <div className={css.input_wrapper}>
              <label className={css.label} htmlFor="become_teacher_name">
                {t("becometeacher.name_label")}
              </label>
              <input
                type="text"
                name="become_teacher_name"
                id="become_teacher_name"
                className={css.input}
                // placeholder="الإسم"
                required
              />
            </div>
            <div className={css.input_wrapper}>
              <label className={css.label} htmlFor="become_teacher_surname">
                {t("becometeacher.surname_label")}
              </label>
              <input
                type="text"
                name="become_teacher_surname"
                id="become_teacher_surname"
                className={css.input}
                // placeholder="اللقب"
                required
              />
            </div>
            <div className={css.input_wrapper}>
              <label className={css.label} htmlFor="become_teacher_phone">
                {t("becometeacher.phone_label")}
              </label>
              <input
                type="tel"
                name="become_teacher_phone"
                id="become_teacher_phone"
                className={css.input}
                // placeholder="الهاتف"
                required
              />
            </div>
            <div className={css.input_group_wrapper}>
              <div className={css.input_inner_wrapper}>
                <label className={css.label} htmlFor="become_teacher_content">
                  {t("becometeacher.content_type_label")}
                </label>
                <input
                  type="text"
                  name="become_teacher_content"
                  id="become_teacher_content"
                  className={css.input}
                  // placeholder="نوع المحتوى المقدم"
                  required
                />
              </div>
              <div className={css.input_inner_wrapper}>
                <label className={css.label} htmlFor="become_teacher_subject">
                  {t("becometeacher.subject_label")}
                </label>
                <input
                  type="text"
                  name="become_teacher_subject"
                  id="become_teacher_subject"
                  className={css.input}
                  // placeholder="المادة"
                  required
                />
              </div>
            </div>

            <div className={css.input_wrapper}>
              <label className={css.label} htmlFor="become_teacher_email">
                {t("becometeacher.email_label")}
              </label>
              <input
                type="email"
                name="become_teacher_email"
                id="become_teacher_email"
                className={css.input}
                // placeholder="البريد الإلكتروني"
                required
              />
            </div>
            <div className={css.input_wrapper}>
              <label className={css.label} htmlFor="become_teacher_file">
                {t("becometeacher.file_label")}
              </label>
              <input
                type="file"
                name="become_teacher_file"
                id="become_teacher_file"
                accept="image/jpeg,application/pdf"
                className={css.input}
                // placeholder="السيرة الذاتية"
                required
              />
              <p className={css.descr}>
                {t("becometeacher.file_types_allowed")}
              </p>
            </div>
            <button className={css.button} type="submit">
              {t("becometeacher.submit_button")}
            </button>
          </form>
        </div>
      </SectionAnimationWrapper>
    </TriangleBackground>
  );
};

export default BecomeTeacherForm;
