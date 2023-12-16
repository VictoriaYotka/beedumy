import css from "./ContactOptions.module.scss";

const ContactOptions = () => {
  return (
    <section className={css.section}>
      {/* cards */}
      <div className={css.cards_container}>
        <ul className={css.cards_list}>
          <li className={css.cards_item}>
            <div className={css.color_3}>
              <div className={css.cards_icon}>
                <i className="kipso-icon-contact"></i>
              </div>
            </div>
            <h3 className={css.cards_title}>تواصل معنا عبر</h3>
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
                  +216 253 734 70<span>داخل تونس </span>
                </a>
              </li>
              <li>
                <a href="tel:+21670253734" className={css.contact_link}>
                  +218 548 85698<span>داخل ليبيا</span>
                </a>
              </li>
            </ul>
          </li>
          <li className={css.cards_item}>
            <div className={css.color_2}>
              <div className={css.cards_icon}>
                <i className="kipso-icon-placeholder"></i>
              </div>
            </div>
            <h3 className={css.cards_title}>عنواننا</h3>
            <p>01 نهج 02 مارس 1934 قرطاج بيرسا, قرطاج تونس</p>
          </li>
          <li className={css.cards_item}>
            <div className={css.color_1}>
              <div className={css.cards_icon}>
                <i className="kipso-icon-manager"></i>
              </div>
            </div>
            <h3 className={css.cards_title}>عن منصتنا</h3>
            <p>
              نوفّر مواد تعليمية لدعم التلاميذ من جميع الفئـات العمرية. باإضافة
              إلى دورات في اخـتصاصات منعــددة
            </p>
          </li>
        </ul>
      </div>

      {/* form */}
      <div className={css.form_container}>
        <h2 className={css.heading}>لنبني شراكة فعالة معا</h2>
        <form className={css.form}>
          <div className={css.form_wrapper}>
            <input
              type="text"
              name="contact_name"
              id="contact_name"
              className={css.form_input}
              placeholder="الإسم"
              required
            />
            <input
              type="email"
              name="contact_email"
              id="contact_email"
              className={css.form_input}
              placeholder="البريد الإلكتروني"
              required
            />
          </div>

          <textarea
            name="contact_message"
            id="contact_message"
            cols="30"
            rows="5"
            className={css.form_textarea}
            placeholder="مجال حر لإضافة تعليقاتك"
          ></textarea>
          <button type="submit" className={css.form_button}>
            أضف تعليقاتك
          </button>
        </form>
      </div>

      {/* map */}
      <div className={css.map_container}>
        {/* <iframe
          title="map"
          //   width="600"
          //   height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA"
        ></iframe> */}

        <div className={css.map_wrapper}>
          <div id="embed-map-display">
            <iframe
              title="map"
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?q=Kyiv,+Україна&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;
