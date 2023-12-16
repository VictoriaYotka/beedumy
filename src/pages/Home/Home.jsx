import { lazy } from "react";
import Hero from "./Hero/Hero";
import Categories from "./Categories/Categories";
import RequestedCoursesHeader from "./RequestedCoursesHeader/RequestedCoursesHeader";
import LearnMore from "./LearnMore/LearnMore";

const RequestedCourses = lazy(() =>
  import("./RequestedCourses/RequestedCourses")
);
const Teachers = lazy(() => import("./Teachers/Teachers"));
const MobileApp = lazy(() => import("./MobileApp/MobileApp"));
const Feedback = lazy(() => import("./Feedback/Feedback"));
const Articles = lazy(() => import("./Articles/Articles"));
const Partners = lazy(() => import("./Partners/Partners"));
const Subscription = lazy(() => import("./Subscription/Subscription"));

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <RequestedCoursesHeader />
      <RequestedCourses />
      <LearnMore />
      <Teachers />
      <MobileApp />
      <Feedback />
      <Articles />
      <Partners />
      <Subscription />
    </>
  );
};

export default Home;
