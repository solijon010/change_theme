import { createContext, useReducer, useState } from "react";

export const contextProvider = createContext();

const initialState = {
  title: "Fn-45",
  theme: "light",
};

const reducer = function (state, action) {
  switch (action.type) {
    case "CHANGE_TITLE":
      return { ...state, title: action.payload };
    case "CHANGE_THEME":
      return { ...state, theme: state.theme==="dark"?"light":"dark" };
    default:
      return state;
  }
};

function MainContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <contextProvider.Provider value={{ state, dispatch }}>
      {children}
    </contextProvider.Provider>
  );
}

export default MainContext;
