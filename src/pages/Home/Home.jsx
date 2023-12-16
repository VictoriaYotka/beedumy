import { lazy } from "react";
import Hero from "./Hero/Hero";
import Categories from "./Categories/Categories";

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
      <RequestedCourses />
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
