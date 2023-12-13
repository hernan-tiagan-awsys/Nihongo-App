import { useContext } from "react";
import { GradeContext } from "../../context/GradeContext";

export const useGradeContext = () => {
    const context = useContext(GradeContext);

    if (!context)
        throw Error(
            "useGradeContext must be used inside a GradeContextProvider"
        );

    return context;
};
