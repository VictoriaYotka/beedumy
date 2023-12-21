import React from "react";
import BuyCourseOptions from "./BuyCourseOptions/BuyCourseOptions";
import TriangleBackground from "../../components/Layout/TriangleBackground/TriangleBackground";
import SimplePageHeader from "../../components/SimplePageHeader/SimplePageHeader";

const BuyCourse = () => {
  return (
    <>
      <SimplePageHeader
        heading="course"
        subheading="price"
        background="#7c4bc0"
      />
      <TriangleBackground>
        <BuyCourseOptions />
      </TriangleBackground>
    </>
  );
};

export default BuyCourse;
