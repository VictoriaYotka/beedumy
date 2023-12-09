import { lazy } from "react";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";

const RequestedCourses = lazy(() =>
  import("../../components/RequestedCourses/RequestedCourses")
);
const Teachers = lazy(() => import("../../components/Teachers/Teachers"));
const MobileApp = lazy(() => import("../../components/MobileApp/MobileApp"));
const Feedback = lazy(() => import("../../components/Feedback/Feedback"));
const Articles = lazy(() => import("../../components/Articles/Articles"));
const Partners = lazy(() => import("../../components/Partners/Partners"));
const Subscription = lazy(() =>
  import("../../components/Subscription/Subscription")
);

const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      {/* <Categories /> */}
      {/* <RequestedCourses /> */}
      {/* <Teachers /> */}
      {/* <MobileApp /> */}
      {/* <Feedback /> */}
      {/* <Articles /> */}
      <Partners />
      <Subscription />
    </>
  );
};

export default Home;
