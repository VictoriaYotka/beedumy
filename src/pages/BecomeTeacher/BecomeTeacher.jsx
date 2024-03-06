import BecomeTeacherForm from "./BecomeTeacherForm/BecomeTeacherForm";
import SimplePageHeader from "../../components/SimplePageHeader/SimplePageHeader";
import { useTranslation } from "react-i18next";

const BecomeTeacher = () => {
  const { t } = useTranslation();

  const handleBecomeTeacherFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.become_teacher_name.value;
    const surname = e.target.elements.become_teacher_surname.value;
    const phone = e.target.elements.become_teacher_phone.value;
    const content = e.target.elements.become_teacher_content.value;
    const subject = e.target.elements.become_teacher_subject.value;
    const email = e.target.elements.become_teacher_email.value;
    const file = e.target.elements.become_teacher_file.value;

    const data = {
      name,
      surname,
      phone,
      content,
      subject,
      email,
      file,
    };
    console.log(data);

    e.target.reset();
  };

  return (
    <>
      <SimplePageHeader
        heading={t("becometeacher.heading")}
        subheading={t("becometeacher.subheading")}
        background="#5e5ed6"
      />
      <BecomeTeacherForm
        handleBecomeTeacherFormSubmit={handleBecomeTeacherFormSubmit}
      />
    </>
  );
};

export default BecomeTeacher;
