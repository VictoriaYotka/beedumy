import About from "../../pages/About/About";
import Categories from "../../pages/Categories/Categories";
import Course from "../../pages/Course/Course";
import Courses from "../../pages/Courses/Courses";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";
import SharedLayout from "../../pages/SharedLayout/SharedLayout";
import Teacher from "../../pages/Teacher/Teacher";
import Teachers from "../../pages/Teachers/Teachers";

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
        </Route>
      </Routes>
    </>
  );
}

export default App;
