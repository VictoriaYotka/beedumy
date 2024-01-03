import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router";
import SharedLayout from "../../pages/SharedLayout/SharedLayout";
import { useTranslation } from "react-i18next";
import PublicRoute from "../PublicRoute/PublicRoute";

const Register = lazy(() => import("../../pages/Sign/Register"));
const Login = lazy(() => import("../../pages/Sign/Login"));
const ForgotPassword = lazy(() => import("../../pages/Sign/ForgotPassword"));
const Categories = lazy(() => import("../../pages/Categories/Categories"));
const SingleCourse = lazy(() =>
  import("../../pages/SingleCourse/SingleCourse")
);
const CoursesTunisian = lazy(() =>
  import("../../pages/CoursesTunisian/CoursesTunisian")
);
const CoursesLibyan = lazy(() =>
  import("../../pages/CoursesLibyan/CoursesLibyan")
);
const BuyCourse = lazy(() => import("../../pages/BuyCourse/BuyCourse"));
const Faq = lazy(() => import("../../pages/Faq/Faq"));
const Home = lazy(() => import("../../pages/Home/Home"));
const NotFound = lazy(() => import("../../pages/Not found/NotFound"));
const SingleTeacher = lazy(() =>
  import("../../pages/SingleTeacher/SingleTeacher")
);
const Teachers = lazy(() => import("../../pages/Teachers/Teachers"));
const News = lazy(() => import("../../pages/News/News"));
const SingleNews = lazy(() => import("../../pages/SingleNews/SingleNews"));
const BecomeTeacher = lazy(() =>
  import("../../pages/BecomeTeacher/BecomeTeacher")
);
const Contact = lazy(() => import("../../pages/Contact/Contact"));
const About = lazy(() => import("../../pages/About/About"));
const Gallery = lazy(() => import("../../pages/Gallery/Gallery"));

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.dir();
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
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
          <Route path="courses-tunisian" element={<CoursesTunisian />} />
          <Route path="courses-libyan" element={<CoursesLibyan />} />
          <Route path="courses/:courseId" element={<SingleCourse />} />
          <Route path="courses/:courseId/buy" element={<BuyCourse />} />
          <Route path="categories" element={<Categories />} />
          <Route path="news" element={<News />} />
          <Route path="news/:newsId" element={<SingleNews />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="teachers/:teacherId" element={<SingleTeacher />} />
          <Route path="becometeacher" element={<BecomeTeacher />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
