import css from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <div className={css.container}>
      <h2 className={css.heading}>لنبني شراكة فعالة معا</h2>
      <form className={css.form}>
        <div className={css.wrapper}>
          <input
            type="text"
            name="contact_name"
            id="contact_name"
            className={css.input}
            placeholder="الإسم"
            required
          />
          <input
            type="email"
            name="contact_email"
            id="contact_email"
            className={css.input}
            placeholder="البريد الإلكتروني"
            required
          />
        </div>

        <textarea
          name="contact_message"
          id="contact_message"
          cols="30"
          rows="5"
          className={css.textarea}
          placeholder="مجال حر لإضافة تعليقاتك"
        ></textarea>
        <button type="submit" className={css.button}>
          أضف تعليقاتك
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
