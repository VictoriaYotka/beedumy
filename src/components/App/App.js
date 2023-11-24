import { lazy } from "react";
import { Route, Routes } from "react-router";
import SharedLayout from "../../pages/SharedLayout/SharedLayout";

const About = lazy(() => import("../../pages/About/About"));
const Categories = lazy(() => import("../../pages/Categories/Categories"));
const Course = lazy(() => import("../../pages/Course/Course"));
const Courses = lazy(() => import("../../pages/Courses/Courses"));
const Faq = lazy(() => import("../../pages/Faq/Faq"));
const Home = lazy(() => import("../../pages/Home/Home"));
const NotFound = lazy(() => import("../../pages/Not found/NotFound"));
const Teacher = lazy(() => import("../../pages/Teacher/Teacher"));
const Teachers = lazy(() => import("../../pages/Teachers/Teachers"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<Course />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/:teacherId" element={<Teacher />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
