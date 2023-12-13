import { Box, GridItem, Spacer, UnorderedList } from "@chakra-ui/react";
import QuestionItem from "./QuestionItem";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";

const QuestionList = ({ bg, hoverColor, hasSubmit }) => {
  const { questions } = useQuestionContext();
  return (
    <GridItem colSpan={{ base: "4", lg: "2" }}>
      <Box maxW={{ base: "100vw", lg: "60vw" }} mt={{ base: "2.5vh", lg: "0" }}>
        <UnorderedList>
          {questions?.map((qn, index) => (
            <QuestionItem
              qn={qn}
              bg={bg}
              hoverColor={hoverColor}
              key={qn.question}
              index={index}
              hasSubmit={hasSubmit}
            />
          ))}
        </UnorderedList>
      </Box>
      <Spacer minH={{ base: "10vh", lg: "0" }} />
    </GridItem>
  );
};
export default QuestionList;
