import css from "./Contact.module.scss";
import SimplePageHeader from "../../components/SimplePageHeader/SimplePageHeader";
import SocialsList from "../../components/SocialsList/SocialsList";
import ContactOptions from "./ContactOptions/ContactOptions";
import ContactForm from "./ContactForm/ContactForm";
import ContactMap from "./ContactMap/ContactMap";

const Contact = () => {
  return (
    <>
      <SimplePageHeader heading="تواصل معنا" background="#9ab3f5">
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
