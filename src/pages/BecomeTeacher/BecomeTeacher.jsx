import React from "react";
import BecomeTeacherForm from "../../components/BecomeTeacherForm/BecomeTeacherForm";
import SimplePageHeader from "../../components/SimplePageHeader/SimplePageHeader";

const BecomeTeacher = () => {
  return (
    <>
      <SimplePageHeader
        heading="انضم إلينا"
        subheading="كن فردا من عائلة منصة بيرسا"
        background="#5e5ed6"
      />
      <BecomeTeacherForm />
    </>
  );
};

export default BecomeTeacher;
