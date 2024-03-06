import { lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import SharedLayout from "../../pages/SharedLayout/SharedLayout";
import { useTranslation } from "react-i18next";
import PublicRoute from "../PublicRoute/PublicRoute";
import ScrollTop from "../Layout/ScrollTop/ScrollTop";

const Register = lazy(() => import("../../pages/Sign/Register"));
const Login = lazy(() => import("../../pages/Sign/Login"));
const ForgotPassword = lazy(() => import("../../pages/Sign/ForgotPassword"));
const Categories = lazy(() => import("../../pages/Categories/Categories"));
const SingleCourse = lazy(() =>
  import("../../pages/SingleCourse/SingleCourse")
);
const Curricula = lazy(() => import("../../pages/Curricula/Curricula"));
const BuyCourse = lazy(() => import("../../pages/BuyCourse/BuyCourse"));
const Home = lazy(() => import("../../pages/Home/Home"));
const NotFound = lazy(() => import("../../pages/Not found/NotFound"));
const News = lazy(() => import("../../pages/News/News"));
const SingleNews = lazy(() => import("../../pages/SingleNews/SingleNews"));
const Contact = lazy(() => import("../../pages/Contact/Contact"));

// const About = lazy(() => import("../../pages/About/About"));
// const BecomeTeacher = lazy(() =>
//   import("../../pages/BecomeTeacher/BecomeTeacher")
// );
// const Gallery = lazy(() => import("../../pages/Gallery/Gallery"));
// const Faq = lazy(() => import("../../pages/Faq/Faq"));
// const Teachers = lazy(() => import("../../pages/Teachers/Teachers"));
// const SingleTeacher = lazy(() =>
//   import("../../pages/SingleTeacher/SingleTeacher")
// );

function App() {
  const { i18n } = useTranslation();

  const [direction, setDirection] = useState(document.documentElement.dir);

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "dir"
        ) {
          setDirection(document.documentElement.dir);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const dir = i18n.dir();
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n]);

  return (
    <>
      <ScrollTop />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home direction={direction} />} />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="forgotpassword"
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            }
          />
          <Route
            path="categories"
            element={<Categories direction={direction} />}
          />
          <Route path="categories/:curricula" element={<Curricula />} />
          <Route path="courses/:courseId" element={<SingleCourse />} />
          <Route path="courses/:courseId/buy" element={<BuyCourse />} />

          <Route path="news" element={<News />} />
          <Route path="news/:newsId" element={<SingleNews />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="teachers" element={<Teachers />} /> */}
          {/* <Route path="teachers/:teacherId" element={<SingleTeacher />} /> */}
          {/* <Route path="becometeacher" element={<BecomeTeacher />} /> */}
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="gallery" element={<Gallery />} /> */}
          {/* <Route path="faq" element={<Faq />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
