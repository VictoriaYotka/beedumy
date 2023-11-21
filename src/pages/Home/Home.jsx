import React from "react";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import RequestedCourses from "../../components/RequestedCourses/RequestedCourses";
import Teachers from "../../components/Teachers/Teachers";
import MobileApp from "../../components/MobileApp/MobileApp";
import Feedback from "../../components/Feedback/Feedback";
import Articles from "../../components/Articles/Articles";
import Partners from "../../components/Partners/Partners";
import Subscription from "../../components/Subscription/Subscription";

const Home = () => {
  return (
    <>
      {/* <Hero />
      <Categories /> */}
      {/* <RequestedCourses /> */}
      {/* <Teachers /> */}
      {/* <MobileApp /> */}
      {/* <Feedback /> */}
      <Articles />
      <Partners />
      {/* <Subscription /> */}
    </>
  );
};

export default Home;
