import BecomeTeacherForm from "./BecomeTeacherForm/BecomeTeacherForm";
import SimplePageHeader from "../../components/SimplePageHeader/SimplePageHeader";
import { useTranslation } from "react-i18next";

const BecomeTeacher = () => {
  const { t } = useTranslation();

  return (
    <>
      <SimplePageHeader
        heading={t("becometeacher.heading")}
        subheading={t("becometeacher.subheading")}
        background="#5e5ed6"
      />
      <BecomeTeacherForm />
    </>
  );
};

export default BecomeTeacher;
