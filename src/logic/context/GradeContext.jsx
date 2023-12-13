import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { fetchGrades, fetchTotalScoresAndItems } from "../services/apiGrades";
import { useUserContext } from "./../hooks/user/useUserContext";

export const GradeContext = createContext();

const initialGradeState = {
    grades: null,
    gradesBySet: null,
    totalScoresNumItems: null,
};

const gradeReducer = (state, action) => {
    switch (action.type) {
        case "receivedGrades":
            return {
                ...state,
                grades: action.payload,
            };
        case "receivedSpecificGrade":
            return {
                ...state,
                gradesBySet: action.payload,
            };
        case "addGrades":
            const { type, data } = action.payload;

            // Assuming you have separate properties for kanjiGrades, vocabGrades, and grammarGrades
            const updatedGrades = { ...state.grades };

            let isGradedIndex;

            if (type === "kanji") {
                const kanjiGrades = updatedGrades.kanjiGrades || [];

                isGradedIndex = kanjiGrades.findIndex(
                    (grades) => grades?.questionSetId === data.questionSetId
                );

                if (isGradedIndex !== -1) {
                    kanjiGrades[isGradedIndex] = data;
                } else {
                    kanjiGrades.push(data);
                }

                updatedGrades.kanjiGrades = kanjiGrades;
            } else if (type === "vocab") {
                const vocabGrades = updatedGrades.vocabGrades || [];

                isGradedIndex = vocabGrades.findIndex(
                    (grades) => grades?.questionSetId === data.questionSetId
                );

                if (isGradedIndex !== -1) {
                    vocabGrades[isGradedIndex] = data;
                } else {
                    vocabGrades.push(data);
                }

                updatedGrades.vocabGrades = vocabGrades;
            } else if (type === "grammar") {
                const grammarGrades = updatedGrades.grammarGrades || [];

                isGradedIndex = grammarGrades.findIndex(
                    (grades) => grades?.questionSetId === data.questionSetId
                );

                if (isGradedIndex !== -1) {
                    grammarGrades[isGradedIndex] = data;
                } else {
                    grammarGrades.push(data);
                }

                updatedGrades.grammarGrades = grammarGrades;
            }
            return {
                ...state,
                grades: updatedGrades,
            };
        case "receivedTotalScoresNumItems":
            return {
                ...state,
                totalScoresNumItems: action.payload,
            };
        case "updateTotalScoresNumItems":
            return {
                ...state,
                totalScoresNumItems: "",
            };
        case "clearGradeBySet":
            return {
                ...state,
                gradesBySet: null,
            };
        default:
            return state;
    }
};

export const GradeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gradeReducer, initialGradeState);

    const { user } = useUserContext();

    useEffect(() => {
        async function fetchGrd() {
            const grades = await fetchGrades(user);
            const scores = await fetchTotalScoresAndItems(user._id);

            if (grades) dispatch({ type: "receivedGrades", payload: grades });
            if (scores)
                dispatch({
                    type: "receivedTotalScoresNumItems",
                    payload: scores,
                });
        }
        user && fetchGrd();
    }, [user]);

    return (
        <GradeContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GradeContext.Provider>
    );
};
