import React from "react";
import CoursesFilter from "../../components/CoursesFilterInCategories/CoursesFilterInCategories";
import StartLearningTrip from "../../components/StartLearningTrip/StartLearningTrip";
import FAQ from "../../components/FAQ/FAQ";
import CoursesListInCategories from "../../components/CoursesListInCategories/CoursesListInCategories";

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
