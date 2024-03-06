import css from "./Contact.module.scss";
import { useTranslation } from "react-i18next";
import SimplePageHeader from "../../components/SimplePageHeader/SimplePageHeader";
import SocialsList from "../../components/SocialsList/SocialsList";
import ContactOptions from "./ContactOptions/ContactOptions";
import ContactForm from "./ContactForm/ContactForm";
import ContactMap from "./ContactMap/ContactMap";

const Contact = () => {
  const { t } = useTranslation();

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.contact_name.value;
    const email = e.target.elements.contact_email.value;
    const comment = e.target.elements.contact_message.value;

    const data = {
      name,
      email,
      comment,
    };
    console.log(data);

    e.target.reset();
  };

  return (
    <>
      <SimplePageHeader heading={t("contact.header")} background="#9ab3f5">
        <ul className={css.socials_list}>
          <SocialsList />
        </ul>
      </SimplePageHeader>

      <section className={css.section}>
        <ContactOptions />
        <ContactForm handleContactFormSubmit={handleContactFormSubmit} />
        <ContactMap />
      </section>
    </>
  );
};

export default Contact;
