import { useTranslation } from "react-i18next";
import CoursesFilterInCourses from "../../components/CoursesFilterInCourses/CoursesFilterInCourses";
import CoursesListInCourses from "../../components/CoursesListInCourses/CoursesListInCourses";

const CoursesTunisian = () => {
  const { t } = useTranslation();

  return (
    <>
      <CoursesFilterInCourses
        curriculum={t("categories.heading_tunisian_curriculum")}
      />

      <CoursesListInCourses />
    </>
  );
};

export default CoursesTunisian;
