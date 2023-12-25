import css from "./Contact.module.scss";
import { useTranslation } from "react-i18next";
import SimplePageHeader from "../../components/SimplePageHeader/SimplePageHeader";
import SocialsList from "../../components/SocialsList/SocialsList";
import ContactOptions from "./ContactOptions/ContactOptions";
import ContactForm from "./ContactForm/ContactForm";
import ContactMap from "./ContactMap/ContactMap";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <SimplePageHeader heading={t("contact.header")} background="#9ab3f5">
        <SocialsList />
      </SimplePageHeader>
      <section className={css.section}>
        <ContactOptions />
        <ContactForm />
        <ContactMap />
      </section>
    </>
  );
};

export default Contact;
