import React from "react";
import SimplePageHeader from "../../components/SimplePageHeader/SimplePageHeader";
import SocialsList from "../../components/SocialsList/SocialsList";
import ContactOptions from "../../components/ContactOptions/ContactOptions";

const Contact = () => {
  return (
    <>
      <SimplePageHeader heading="تواصل معنا" background="#9ab3f5">
        <SocialsList />
      </SimplePageHeader>
      <ContactOptions />
    </>
  );
};

export default Contact;
