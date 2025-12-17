import { useContext } from "react";
import { contextProvider } from "../../context/MainContext";

function Navbar() {
  const { state } = useContext(contextProvider);

  const style = {
    color: state.theme == "dark" ? "white" : "black",
    backgroundColor: state.theme == "dark" ? "#123456" : "lightgray",
  };

  return (
    <div style={style}>
      Navbar <span>{state.title}</span>
    </div>
  );
}

export default Navbar;
