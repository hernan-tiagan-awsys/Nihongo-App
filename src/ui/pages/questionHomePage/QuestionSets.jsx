import { Badge } from "@chakra-ui/layout";
import { Td, Tr } from "@chakra-ui/table";
import { useNavigate } from "react-router-dom";
import { useGradeContext } from "../../../logic/hooks/grade/useGradeContext";
import ThemeColors from "../main/ThemeColors";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";
import { useEffect } from "react";

const QuestionSets = ({ type, level, set }) => {
  const { hover } = ThemeColors();
  const navigate = useNavigate();
  const { questionsQty } = useQuestionContext();
  const { grades } = useGradeContext();
  const dynamicScore =
    (type === "kanji" &&
      grades?.kanjiGrades
        ?.map(
          (kanji) =>
            kanji.questionSetId.slice(0, 1) === level &&
            kanji.questionSetId.slice(-1) === set &&
            kanji.score
        )
        .filter((kanjiScore) => kanjiScore === 0 || kanjiScore)) ||
    (type === "vocab" &&
      grades?.vocabGrades
        ?.map(
          (vocab) =>
            vocab.questionSetId.slice(0, 1) === level &&
            vocab.questionSetId.slice(-1) === set &&
            vocab.score
        )
        ?.filter((vocabScore) => vocabScore === 0 || vocabScore)) ||
    (type === "grammar" &&
      grades?.grammarGrades
        ?.map(
          (grammar) =>
            grammar.questionSetId.slice(0, 1) === level &&
            grammar.questionSetId.slice(-1) === set &&
            grammar.score
        )
        .filter((grammarScore) => grammarScore === 0 || grammarScore));

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

  // type === "kanji" && level == 5 && set == 1 && console.log(grades);
  function setQuestionStatus() {
    if (dynamicScore > 7) {
      return <Badge colorScheme="green">Pass</Badge>;
    } else if (dynamicScore?.[0] < 8 && dynamicScore?.[0] != null) {
      return <Badge colorScheme="red">Fail</Badge>;
    } else {
      return <Badge colorScheme="gray">pending</Badge>;
    }
  }

  return (
    <Tr
      key={`questions/n${level}/${type}/${set}`}
      _hover={{ bg: hover }}
      onClick={() => navigate(`questions/n${level}/${type}/${set}`)}
      cursor={"pointer"}
    >
      <Td>{`Question : ${set}`}</Td>
      <Td>{numOfItems}</Td>
      <Td isNumeric>
        {(dynamicScore?.[0] === 0 && "0") || dynamicScore || null}
      </Td>
      <Td isNumeric>{setQuestionStatus()}</Td>
    </Tr>
  );
};
export default QuestionSets;
