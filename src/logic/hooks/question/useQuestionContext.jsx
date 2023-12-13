import { useContext } from "react";
import { QuestionContext } from "./../../context/QuestionContext";

export const useQuestionContext = () => {
    const context = useContext(QuestionContext);

    if (!context)
        throw Error(
            "useQuestioContext must be used inside a QuestionContextProvider"
        );

    return context;
};
