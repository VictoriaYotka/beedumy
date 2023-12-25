import CoursesFilterInCategories from "./CoursesFilterInCategories/CoursesFilterInCategories";
import StartLearningTrip from "./StartLearningTrip/StartLearningTrip";
import FAQ from "./FAQ/FAQ";
import CoursesListInCategories from "./CoursesListInCategories/CoursesListInCategories";
import { useTranslation } from "react-i18next";

const Categories = () => {
  const { t } = useTranslation();

  return (
    <>
      <CoursesFilterInCategories />
      <CoursesListInCategories
        heading={t("categories.heading_tunisian_curriculum")}
      />
      <CoursesListInCategories
        heading={t("categories.heading_libyan_curriculum")}
      />
      <StartLearningTrip />
      <FAQ />
    </>
  );
};

export default Categories;
