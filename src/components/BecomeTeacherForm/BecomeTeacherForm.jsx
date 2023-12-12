import css from "./BecomeTeacherForm.module.scss";
import TriangleBackground from "../Layout/TriangleBackground/TriangleBackground";

const BecomeTeacherForm = () => {
  return (
    <TriangleBackground>
      <div className={css.container}>
        <form className={css.form}>
          <div className={css.input_wrapper}>
            <label className={css.label} for="become_teacher_name">
              الإسم
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
            <label className={css.label} for="become_teacher_surname">
              اللقب
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
            <label className={css.label} for="become_teacher_phone">
              الهاتف
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
              <label className={css.label} for="become_teacher_content">
                نوع المحتوى المقدم
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
              <label className={css.label} for="become_teacher_subject">
                المادة
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
            <label className={css.label} for="become_teacher_email">
              البريد الإلكتروني
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
            <label className={css.label} for="become_teacher_file">
              جلب الملف
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
              فضلا إرسال السيرة الذاتية بصيغة pdf أو jpg
            </p>
          </div>
          <button className={css.button} type="submit">
            تأكيد البيانات
          </button>
        </form>
      </div>
    </TriangleBackground>
  );
};

export default BecomeTeacherForm;
