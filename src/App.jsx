import "./App.css";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-12">
        Course Registration
      </h1>
      <div className="flex gap-6 mx-5 sm:mx-8 lg:mx-14 mb-20">
        <Cards></Cards>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
