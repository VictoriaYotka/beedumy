import React from "react";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import RequestedCourses from "../../components/RequestedCourses/RequestedCourses";
import Teachers from "../../components/Teachers/Teachers";
import MobileApp from "../../components/MobileApp/MobileApp";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <RequestedCourses />
      <Teachers />
      <MobileApp />
    </>
  );
};

export default Home;
