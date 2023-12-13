import { useEffect } from "react";
import { createContext, useReducer } from "react";

export const KanaContext = createContext();

let initialState = {
  kanaData: [],
  kanaMode: "",
  kanaType: "",
  kanaGroup: "",
};

const kanaReducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        kanaData: shuffle(action.payload),
      };
    case "modeSet":
      sessionStorage.setItem("kanaMode", action.payload);
      return {
        ...state,
        kanaMode: action.payload,
      };
    case "typeSet":
      sessionStorage.setItem("kanaType", action.payload);
      return {
        ...state,
        kanaType: action.payload,
      };
    case "groupSet":
      sessionStorage.setItem("kanaGroup", action.payload);
      return {
        ...state,
        kanaGroup: action.payload,
      };
    case "clear":
      sessionStorage.clear();
      return {
        kanaData: [],
        kanaMode: "",
        kanaType: "",
        kanaGroup: "",
      };
    default:
      return state;
  }
};

export const KanaContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(kanaReducer, initialState);
  const kanaModeToken = sessionStorage.getItem("kanaMode");
  const kanaSetToken = sessionStorage.getItem("kanaType");
  const kanaGroupToken = sessionStorage.getItem("kanaGroup");

  useEffect(() => {
    if (kanaModeToken)
      dispatch({
        type: "modeSet",
        payload: sessionStorage.getItem("kanaMode").split(","),
      });
    if (kanaSetToken)
      dispatch({
        type: "typeSet",
        payload: sessionStorage.getItem("kanaType"),
      });
    if (kanaGroupToken)
      dispatch({
        type: "groupSet",
        payload: sessionStorage.getItem("kanaGroup").split(","),
      });
  }, [kanaModeToken, kanaSetToken, kanaGroupToken]);

  return (
    <KanaContext.Provider value={{ ...state, dispatch }}>
      {children}
    </KanaContext.Provider>
  );
};

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
