const Cart = () => {
  return (
    <div className="w-1/4 h-max bg-white p-6 rounded-xl">
      <h4 className="text-lg font-bold text-blue-500 leading-relaxed pb-4 border-b-2">
        Credit Hour Remaining 7 hr
      </h4>
      <div className="border-b-2 py-6">
        <h3 className="text-xl font-bold">Course Name</h3>
      </div>
      <div className="border-b-2 py-6">
        <h5 className="font-medium">Total Credit Hour : 13</h5>
      </div>
      <div className="pt-6">
        <h5 className="font-semibold">Total Price : 48000 USD</h5>
      </div>
    </div>
  );
};

export default Cart;
