import { Badge } from "@chakra-ui/layout";
import { Td, Tr } from "@chakra-ui/table";
import { useNavigate } from "react-router-dom";
import { useGradeContext } from "../../logic/hooks/grade/useGradeContext";
import ThemeColors from "../pages/main/ThemeColors";
import { useQuestionContext } from "../../logic/hooks/question/useQuestionContext";

const QuestionSets = ({ type, level, set }) => {
  const { hover } = ThemeColors();
  const navigate = useNavigate();
  const { questionsQty } = useQuestionContext();
  const { grades } = useGradeContext();

  // check if what grade is in this set
  const dynamicScore =
    (type === "kanji" &&
      grades?.kanjiGrades
        ?.map(
          (kanji) =>
            kanji.questionSetId.slice(0, 1) === level &&
            kanji.questionSetId.slice(-1) === set &&
            kanji.score
        )
        .filter((kanjiScore) => kanjiScore)
        .at(0)) ||
    (type === "vocab" &&
      grades?.vocabGrades
        ?.map(
          (vocab) =>
            vocab.questionSetId.slice(0, 1) === level &&
            vocab.questionSetId.slice(-1) === set &&
            vocab.score
        )
        ?.filter((vocabScore) => vocabScore)
        .at(0)) ||
    (type === "grammar" &&
      grades?.grammarGrades
        ?.map(
          (grammar) =>
            grammar.questionSetId.slice(0, 1) === level &&
            grammar.questionSetId.slice(-1) === set &&
            grammar.score
        )
        .filter((grammarScore) => grammarScore)
        .at(0)) ||
    null;

  let numOfItems =
    (type === "kanji" &&
      questionsQty?.map((qn) => {
        const { _id, count } = qn;
        return (
          _id.level == level && _id.type == "kanji" && _id.set == set && count
        );
      })) ||
    (type === "vocab" &&
      questionsQty?.map((qn) => {
        const { _id, count } = qn;
        return (
          _id.level === level &&
          _id.type === "vocab" &&
          _id.set === set &&
          count
        );
      })) ||
    (type === "grammar" &&
      questionsQty?.map((qn) => {
        const { _id, count } = qn;
        return (
          _id.level === level &&
          _id.type === "grammar" &&
          _id.set === set &&
          count
        );
      }));

  function setQuestionStatus() {
    if (dynamicScore > 7) {
      return <Badge colorScheme="green">Pass</Badge>;
    } else if (dynamicScore < 8 && dynamicScore != null) {
      return <Badge colorScheme="red">Fail</Badge>;
    } else {
      return <Badge colorScheme="gray">pending</Badge>;
    }
  }
  return (
    <Tr key={`questions/n${level}/${type}/${set}`} _hover={{ bg: hover }}>
      <Td
        onClick={() => navigate(`questions/n${level}/${type}/${set}`)}
        style={{ cursor: "pointer" }}
      >
        {`Question : ${set}`}
      </Td>
      <Td>{numOfItems}</Td>
      <Td isNumeric>{dynamicScore || null}</Td>
      <Td isNumeric>{setQuestionStatus()}</Td>
    </Tr>
  );
};
export default QuestionSets;
