import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router";
import SharedLayout from "../../pages/SharedLayout/SharedLayout";
import { useTranslation } from "react-i18next";

const About = lazy(() => import("../../pages/About/About"));
const Categories = lazy(() => import("../../pages/Categories/Categories"));
const SingleCourse = lazy(() =>
  import("../../pages/SingleCourse/SingleCourse")
);
const Courses = lazy(() => import("../../pages/Courses/Courses"));
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
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<SingleCourse />} />
          <Route path="/courses/:courseId/buy" element={<BuyCourse />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:newsId" element={<SingleNews />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/:teacherId" element={<SingleTeacher />} />
          <Route path="/becometeacher" element={<BecomeTeacher />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
