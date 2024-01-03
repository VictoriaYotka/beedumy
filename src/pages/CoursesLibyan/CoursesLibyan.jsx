import { useTranslation } from "react-i18next";
import CoursesFilterInCourses from "../../components/CoursesFilterInCourses/CoursesFilterInCourses";
import CoursesListInCourses from "../../components/CoursesListInCourses/CoursesListInCourses";

const CoursesLibyan = () => {
  const { t } = useTranslation();

  return (
    <>
      <CoursesFilterInCourses
        curriculum={t("categories.heading_libyan_curriculum")}
      />

      <CoursesListInCourses />
    </>
  );
};

export default CoursesLibyan;
