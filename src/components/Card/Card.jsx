import PropTypes from "prop-types";
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineBookOpen } from "react-icons/hi";

const Card = ({ course, handleSelectBtn }) => {
  const { cover_img, course_title, course_description, price, credit_hour } =
    course;
  return (
    <div className="bg-white p-4 rounded-xl space-y-4 flex flex-col justify-between">
      <img className="w-full rounded-lg" src={cover_img} alt="" />
      <h4 className="text-lg font-semibold">{course_title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed">
        {course_description}
      </p>
      <div>
        <div className="flex items-center gap-1 text-sm font-medium">
          <FiDollarSign className="text-xl" />
          <span className="mr-auto text-gray-500">Price: {price}</span>
          <HiOutlineBookOpen className="text-xl" />
          <span className="text-gray-500">Credit: {credit_hour}hr</span>
        </div>
        <button
          onClick={() => handleSelectBtn(course)}
          className="w-full text-lg font-medium bg-blue-500 text-white py-2 mt-6 rounded-lg"
        >
          Select
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  course: PropTypes.object,
  handleSelectBtn: PropTypes.func,
};

export default Card;
