import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const Cards = ({ handleSelectBtn }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="lg:w-3/4 h-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {courses.map((course) => (
        <Card
          course={course}
          key={course.id}
          handleSelectBtn={handleSelectBtn}
        ></Card>
      ))}
    </div>
  );
};

Cards.propTypes = {
  handleSelectBtn: PropTypes.func,
};

export default Cards;
