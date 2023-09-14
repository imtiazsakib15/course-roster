import PropTypes from "prop-types";

const Cart = ({ selectedCourses }) => {
  const totalCreditHour = selectedCourses.reduce(
    (totalCreditHour, course) => totalCreditHour + course.credit_hour,
    0
  );
  const totalPrice = selectedCourses.reduce(
    (totalPrice, course) => totalPrice + course.price,
    0
  );
  console.log(totalPrice);
  return (
    <div className="w-1/4 h-max bg-white p-6 rounded-xl">
      <h4 className="text-lg font-bold text-blue-500 leading-relaxed pb-4 border-b-2">
        Credit Hour Remaining 7 hr
      </h4>
      <div className="border-b-2 py-6">
        <h3 className="text-xl font-bold">Course Name</h3>
        <ol className="text-gray-500 leading-relaxed mt-5 space-y-2">
          {selectedCourses.map((course, index) => (
            <li key={index}>
              {index + 1} {course.course_title}
            </li>
          ))}
        </ol>
      </div>
      <div className="border-b-2 py-6">
        <h5 className="font-medium">Total Credit Hour : {totalCreditHour}</h5>
      </div>
      <div className="pt-6">
        <h5 className="font-semibold">Total Price : {totalPrice} USD</h5>
      </div>
    </div>
  );
};

Cart.propTypes = {
  selectedCourses: PropTypes.array,
};

export default Cart;
