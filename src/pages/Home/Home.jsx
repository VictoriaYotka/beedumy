import React from "react";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import RequestedCourses from "../../components/RequestedCourses/RequestedCourses";
import Teachers from "../../components/Teachers/Teachers";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <RequestedCourses />
      <Teachers />
    </>
  );
};

export default Home;
