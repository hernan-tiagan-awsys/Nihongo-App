import { Accordion } from "@chakra-ui/accordion";
import { Heading } from "@chakra-ui/layout";

const QuestionType = ({ children, type, bg }) => {
  return (
    <>
      <Heading fontSize={{ base: "1.5em", lg: "2em" }} m="1.25em">
        {type} Questions
      </Heading>
      <Accordion allowToggle m="1.25em" bg={bg} variant="outline">
        {children}
      </Accordion>
    </>
  );
};
export default QuestionType;
