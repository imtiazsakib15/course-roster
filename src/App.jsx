import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleSelectBtn = (course) => {
    const isExist = selectedCourses.find(
      (previousCourse) => previousCourse.id === course.id
    );
    isExist
      ? toast("Already Selected!!!", {
          position: "top-center",
        })
      : setSelectedCourses([...selectedCourses, course]);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-12">
        Course Registration
      </h1>
      <div className="flex gap-6 mx-5 sm:mx-8 lg:mx-14 mb-20">
        <Cards handleSelectBtn={handleSelectBtn}></Cards>
        <Cart selectedCourses={selectedCourses}></Cart>
      </div>
    </div>
  );
}

export default App;
