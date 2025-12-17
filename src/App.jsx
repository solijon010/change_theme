import { useContext } from "react";
import Navbar from "./components/layouts/Navbar";
import { contextProvider } from "./context/MainContext";
function App() {
  const {state, dispatch } = useContext(contextProvider);

  return (
    <div>
      <Navbar />
      <h1>App</h1>
      <button
        className="px-6 py-2
    bg-blue-600 text-white font-semibold
    rounded-xl
    shadow-md
    hover:bg-blue-700
    active:scale-95
    transition-all duration-200"
        onClick={() => dispatch({ type: "CHANGE_THEME" })}
      >
        {state.theme=="dark"?"light":"dark"}
      </button>
    </div>
  );
}

export default App;
