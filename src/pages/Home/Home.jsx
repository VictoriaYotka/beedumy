import React from "react";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import RequestedCourses from "../../components/RequestedCourses/RequestedCourses";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <RequestedCourses />
    </>
  );
};

export default Home;
