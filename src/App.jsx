import { useContext } from "react";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { contextProvider } from "./context/MainContext";

function App() {
  const { state, dispatch } = useContext(contextProvider);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300
      ${
        state.theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <Navbar />

      <main className="flex-grow px-4 py-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 text-center">Ikromov Solijon</h1>

        <button
          className="px-6 py-2 rounded-xl font-semibold shadow-md
      bg-blue-600 text-white hover:bg-blue-700
      active:scale-95 transition-all duration-200"
          onClick={() => dispatch({ type: "CHANGE_THEME" })}
        >
          {state.theme === "dark" ? "Light" : "Dark"}
        </button>
      </main>

      <Footer />
    </div>
  );
}

export default App;
