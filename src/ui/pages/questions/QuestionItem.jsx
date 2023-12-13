import {
    Box,
    Button,
    Divider,
    Flex,
    Icon,
    ListItem,
    SimpleGrid,
    Text,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import QuestionOption from "./QuestionOption";
import { useEffect, useMemo, useState } from "react";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";
import { useGradeContext } from "../../../logic/hooks/grade/useGradeContext";
import { FiTrash, FiTrash2 } from "react-icons/fi";
import { useUserContext } from "../../../logic/hooks/user/useUserContext";
import ThemeColors from "../main/ThemeColors";
import { deleteQuestion } from "../../../logic/services/apiQuestions";
import AlerPopUp from "../../components/AlerPopUp";

const QuestionItem = ({ qn, index, bg, hoverColor, hasSubmit }) => {
    const { question, options, _id } = qn;

    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [selectedOption, setSelectedOption] = useState({
        index: null,
    });

    const { userAnswers, dispatch: questionDispatch } = useQuestionContext();
    const { gradesBySet } = useGradeContext();
    const { user } = useUserContext();

    // this is to check if the user did not answer yet
    const answersAreNull = useMemo(() =>
        userAnswers.every((answer) => answer === null, [userAnswers])
    );
    useEffect(() => {
        if (answersAreNull) {
            setSelectedOption({ index: null });
        }

        // IF gradesBySet is not equal to null and answers are not null it means that this user already answer this set
        if (gradesBySet && !answersAreNull) {
            const answerIndex = options
                ?.map((opt, optIndex) => opt === userAnswers[index] && optIndex)
                .filter((i) => i)
                .at(0);

            // We need to check if the answerIndex is undefined if it is undefined it means it is at 0 index
            // the filter will get only the true values and 0 is not included so when we use at(0) it will become undefined
            // you can test the value of answerIndex by commenting at and console log the answerIndex
            setSelectedOption((prevState) => ({
                ...prevState,
                index: answerIndex === undefined ? 0 : answerIndex,
            }));
        }
    }, [gradesBySet, index, userAnswers, options, answersAreNull]);

    /****** THIS AREA IS TO FOR THE KANJI QUESTIONS IF [] is not found the endIndex = -1 which display regular question like vocab or grammar*/
    // Find the index of '[' and ']'
    const startIndex = question.indexOf("[");
    const endIndex = question.indexOf("]");

    // Split the question into parts before, within, and after '[' and ']'
    const before = question.substring(0, startIndex);
    const within = question.substring(startIndex + 1, endIndex);
    const after = question.substring(endIndex + 1);

    // This is a function when user chooses an option
    function handleOptionClicked(i, answer) {
        // Check if the selected option is the same as the previously selected one
        const isSameSelected = selectedOption.index === i;

        // set back the index to null if it is selected again
        setSelectedOption((prevState) => ({
            ...prevState,
            index: isSameSelected ? null : i,
        }));

        // If the user is same as selected, remove the answer from the userAnswers array
        if (isSameSelected) {
            questionDispatch({
                type: "answered",
                payload: { answer: null, index },
            });
        } else {
            // Otherwise, dispatch the "answered" action with the selected answer
            questionDispatch({ type: "answered", payload: { answer, index } });
        }
    }

    async function handleDeleteBtn() {
        const isDeleted = await deleteQuestion(qn._id);
        if (isDeleted) {
            toast({
                title: "Questions Deleted Successfully!",
                position: "top",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Failed to delete Question!",
                position: "top",
                status: "error",
                description: `${isDeleted.json.error}`,
                duration: 3000,
                isClosable: true,
            });
        }

        onClose();
    }

    return (
        <Box
            bg={bg}
            mr={{ base: "2.25vw", lg: "1.25vw" }}
            px={{ base: "5vw", lg: "2.25vw" }}
            pb="2.5vw"
            mb="2vh"
            borderRadius="lg"
            id={_id}
        >
            <ListItem listStyleType="none">
                <Flex justifyContent="space-between">
                    <Text
                        fontSize={{ base: "0.80em", lg: "1.5vw" }}
                        py={"2rem"}
                    >
                        {index + 1}.{before}
                        <Text
                            as="span"
                            textDecoration="underline"
                            fontWeight="bold"
                            textUnderlineOffset=".3rem"
                        >
                            {within}
                        </Text>
                        {after}
                    </Text>

                    {/* {(user.role === "admin" || user.role === "teacher") && (
                        <>
                            <Button
                                onClick={onOpen}
                                mt={7}
                                colorScheme="red"
                                bg="red.500"
                            >
                                <FiTrash2 />
                            </Button>
                            <AlerPopUp
                                isOpen={isOpen}
                                onClose={onClose}
                                onClick={handleDeleteBtn}
                                message={"Question"}
                            />
                        </>
                    )} */}
                </Flex>

                <SimpleGrid columns={2} spacing={{ base: 2, lg: 6 }}>
                    {options.map((option, index) => (
                        <QuestionOption
                            option={option}
                            key={option}
                            index={index}
                            bg={bg}
                            hoverColor={hoverColor}
                            handleOptionClicked={handleOptionClicked}
                            selectedOption={selectedOption}
                            hasSubmit={hasSubmit}
                            answer={qn.answer}
                        />
                    ))}
                </SimpleGrid>
            </ListItem>
        </Box>
    );
};
export default QuestionItem;
