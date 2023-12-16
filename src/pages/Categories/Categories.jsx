import React from "react";
import CoursesFilter from "./CoursesFilterInCategories/CoursesFilterInCategories";
import StartLearningTrip from "./StartLearningTrip/StartLearningTrip";
import FAQ from "./FAQ/FAQ";
import CoursesListInCategories from "./CoursesListInCategories/CoursesListInCategories";

const Categories = () => {
  return (
    <>
      <CoursesFilter />
      <CoursesListInCategories heading="المنهج التونسي" />
      <CoursesListInCategories heading="المنهج الليبي" />
      <StartLearningTrip />
      <FAQ />
    </>
  );
};

export default Categories;
