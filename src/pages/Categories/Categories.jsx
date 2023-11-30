import React from "react";
import CoursesFilter from "../../components/CoursesFilter/CoursesFilter";
import StartLearningTrip from "../../components/StartLearningTrip/StartLearningTrip";

const Categories = () => {
  return (
    <>
      <CoursesFilter />
      {/* courses list with CourseCard */}
      <StartLearningTrip />
    </>
  );
};

export default Categories;
