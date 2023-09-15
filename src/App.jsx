import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [creditHourRemaining, setCreditHourRemaining] = useState(20);

  const handleSelectBtn = (course) => {
    const isExist = selectedCourses.find(
      (previousCourse) => previousCourse.id === course.id
    );
    if (isExist) {
      toast("Already Selected!!!", {
        position: "top-center",
      });
      return;
    }
    const newCreditHourRemaining = creditHourRemaining - course.credit_hour;
    if (newCreditHourRemaining < 0) {
      toast("You don't have enough credit hour remaining!!!", {
        position: "top-center",
      });
      return;
    }
    setSelectedCourses([...selectedCourses, course]);
    setCreditHourRemaining(newCreditHourRemaining);
  };

  return (
    <div className="2xl:container mx-auto">
      <h1 className="text-xl sm:text-3xl font-bold text-center my-12">
        Course Registration
      </h1>
      <div className="lg:flex gap-6 mx-5 sm:mx-8 lg:mx-10 mb-20">
        <Cards handleSelectBtn={handleSelectBtn}></Cards>
        <Cart
          selectedCourses={selectedCourses}
          creditHourRemaining={creditHourRemaining}
        ></Cart>
      </div>
    </div>
  );
}

export default App;
