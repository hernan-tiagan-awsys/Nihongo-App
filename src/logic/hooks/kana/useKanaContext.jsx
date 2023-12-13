import { useContext } from "react";
import { KanaContext } from "../../context/KanaContext";

export const useKanaContext = () => {
  const context = useContext(KanaContext);

  if (!context)
    throw Error("useKananContext must be used inside a KananContexttProvider");

  return context;
};
