import { Grid, useColorModeValue, Box, Spacer } from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserContext } from "../../../logic/hooks/user/useUserContext";
import { useGradeContext } from "./../../../logic/hooks/grade/useGradeContext";
import { useQuestionContext } from "./../../../logic/hooks/question/useQuestionContext";

import QuestionSideSets from "./QuestionSideSets";
import QuestionList from "./QuestionList";
import QuestionAnsweredTracker from "./QuestionAnsweredTracker";
import Loader from "../../components/Loader";
import QuestionSkeletonLoader from "../questionHomePage/QuestionSkeletonLoader";
import ThemeColors from "../main/ThemeColors";
import { fetchSpecificGrade } from "../../../logic/services/apiGrades";
import {
    fetchQuestions,
    fetchQuestionsByIds,
} from "../../../logic/services/apiQuestions";
import QuestionAnsweredTrackerMobileWrapper from "./QuestionAnsweredTrackerMobileWrapper";
// import { useQueries, useQuery } from "@tanstack/react-query";
// import { useCallback } from "react";

const QuestionLayout = () => {
    //   useQuery({
    //     queryKey: ["scores"],
    //     queryFn: () => fetchSpecificGrade(user, level, type, set),
    //   });

    const { bg, border } = ThemeColors();
    const hoverColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
    const [isLoading, setIsLoading] = useState(false);
    const [hasSubmit, setHasSubmit] = useState(false);
    const { level, type, set } = useParams();

    const { dispatch: questionDispatch } = useQuestionContext();

    const { user } = useUserContext();

    const { dispatch: gradeDispatch } = useGradeContext();

    // status === "success" && console.log(isGettingSpcfGrade);
    // status === "success" && console.log(data);
    // const { data: questions } = useQueries({
    //     queries:
    //         !isGettingSpcfGrade && data
    //             ? [
    //                   {
    //                       queryKey: ["questions"],
    //                       queryFn: () =>
    //                           fetchQuestionsByIds(data.idPerQuestion),
    //                   },
    //               ]
    //             : [
    //                   {
    //                       queryKey: ["questions"],
    //                       queryFn: () => fetchQuestions(level, type, set),
    //                   },
    //               ],
    // });

    // fetch the grades
    useEffect(() => {
        const fetchGradeAndQuestions = async () => {
            setIsLoading(true);
            try {
                const specificGrade = await fetchSpecificGrade(
                    user,
                    level,
                    type,
                    set
                );

                // if specificGrade not equal to null it means the user already answered this set
                if (specificGrade) {
                    gradeDispatch({
                        type: "receivedSpecificGrade",
                        payload: specificGrade,
                    });

                    const gradedQuestions = await fetchQuestionsByIds(
                        specificGrade.idPerQuestion
                    );

                    questionDispatch({
                        type: "questionReceived",
                        payload: gradedQuestions,
                    });

                    questionDispatch({
                        type: "gradedQnAnswers",
                        payload: specificGrade.userAnswers,
                    });
                    setHasSubmit(true);
                }

                if (!specificGrade) {
                    const qn = await fetchQuestions(level, type, set);
                    questionDispatch({
                        type: "questionReceived",
                        payload: qn,
                    });
                    questionDispatch({
                        type: "clearAnswers",
                    });

                    gradeDispatch({ type: "clearGradeBySet" });

                    setHasSubmit(false);
                }
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching specific grade:", error.message);
            }
        };

        fetchGradeAndQuestions();
    }, [user, level, type, set, gradeDispatch, questionDispatch]);

    return (
        <Box minW="100vw">
            {isLoading && <Loader isLoading={isLoading} />}
            <Loader />
            <Spacer minH="10vh" />
            <Box
                id="questionLayoutContainer"
                pb={{ base: "10vh", lg: "0" }}
                overflow="auto"
                overscrollBehavior="auto"
                sx={{
                    "&::-webkit-scrollbar": {
                        width: "10px",
                        borderRadius: "8px",
                        backgroundColor: `rgba(0, 0, 0, 0.25)`,
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: `rgba(0, 0, 0, 0.25)`,
                    },
                }}
            >
                <Grid
                    mx="2vw"
                    h="90vh"
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(4, 1fr)"
                    gap={3}
                    pt="2.5vw"
                >
                    <QuestionSideSets
                        bg={bg}
                        hoverColor={hoverColor}
                        type={type}
                        level={level}
                        setHasSubmit={setHasSubmit}
                    />
                    {isLoading ? (
                        <QuestionSkeletonLoader />
                    ) : (
                        <QuestionList
                            bg={bg}
                            hoverColor={hoverColor}
                            hasSubmit={hasSubmit}
                        />
                    )}
                    <QuestionAnsweredTracker
                        bg={bg}
                        border={border}
                        hasSubmit={hasSubmit}
                        setHasSubmit={setHasSubmit}
                        display={{ base: "none", lg: "block" }}
                    />
                    <QuestionAnsweredTrackerMobileWrapper>
                        <QuestionAnsweredTracker
                            bg={bg}
                            border={border}
                            hasSubmit={hasSubmit}
                            setHasSubmit={setHasSubmit}
                        />
                    </QuestionAnsweredTrackerMobileWrapper>
                </Grid>
            </Box>
        </Box>
    );
};
export default QuestionLayout;
