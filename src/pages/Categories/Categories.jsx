import React from "react";
import CoursesFilter from "../../components/CoursesFilter/CoursesFilter";
import StartLearningTrip from "../../components/StartLearningTrip/StartLearningTrip";
import FAQ from "../../components/FAQ/FAQ";

const Categories = () => {
  return (
    <>
      <CoursesFilter />
      {/* courses list with CourseCard */}
      <StartLearningTrip />
      <FAQ />
    </>
  );
};

export default Categories;
