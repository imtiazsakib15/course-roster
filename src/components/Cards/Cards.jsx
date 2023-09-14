import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card course={course} key={course.id}></Card>
      ))}
    </div>
  );
};

export default Courses;
