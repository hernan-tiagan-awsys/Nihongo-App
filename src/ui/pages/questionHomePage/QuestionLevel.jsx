import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Text,
  HStack,
  useBoolean,
} from "@chakra-ui/react";
import QuestionSets from "./QuestionSets";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";
import { useGradeContext } from "../../../logic/hooks/grade/useGradeContext";

const QuestionLevel = ({ index, type }) => {
  const { countBySetVocab, countBySetGrammar, countBySetKanji } =
    useQuestionContext();
  const { grades } = useGradeContext();

  let kanjiCtr = 0;
  let kanjiGradedCtr = 0;
  let vocabCtr = 0;
  let vocabGradedCtr = 0;
  let grammarCtr = 0;
  let grammarGradedCtr = 0;

  type === "Kanji"
    ? countBySetKanji?.map((kanji) => kanji._id.level == index && kanjiCtr++) &&
      grades?.kanjiGrades?.map(
        (kg) => kg.questionSetId?.slice(0, 1) == index && kanjiGradedCtr++
      )
    : null;

  type === "Vocab"
    ? countBySetVocab?.map((vocab) => vocab._id.level == index && vocabCtr++) &&
      grades?.vocabGrades?.map(
        (vg) => vg.questionSetId?.slice(0, 1) == index && vocabGradedCtr++
      )
    : null;

  type === "Grammar"
    ? countBySetGrammar?.map(
        (grammar) => grammar._id.level == index && grammarCtr++
      ) &&
      grades?.grammarGrades?.map(
        (gg) => gg.questionSetId?.slice(0, 1) == index && grammarGradedCtr++
      )
    : null;

  return (
    <AccordionItem
      key={index}
      my="1"
      isDisabled={
        (type === "Kanji" && !kanjiCtr) ||
        (type === "Vocab" && !vocabCtr) ||
        (type === "Grammar" && !grammarCtr)
      }
      verticalAlign="center"
    >
      <AccordionButton variant="solid">
        <HStack as="span" flex="1" textAlign="left">
          <ChevronRightIcon />
          <Text fontSize="1em">{`N${index}`}</Text>
        </HStack>
        <Box as="span" flex="1" textAlign="right" mx="5">
          <Text fontSize="1em">
            {(type === "Kanji" && (kanjiGradedCtr || "0")) ||
              (type === "Vocab" && (vocabGradedCtr || "0")) ||
              (type === "Grammar" && (grammarGradedCtr || "0"))}
            /
            {(type === "Kanji" && (kanjiCtr || "0")) ||
              (type === "Vocab" && (vocabCtr || "0")) ||
              (type === "Grammar" && (grammarCtr || "0"))}
          </Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel
        maxH="40vh"
        pb={4}
        overflow="auto"
        overscrollBehavior="auto"
        sx={{
          "&::-webkit-scrollbar": {
            width: "8px",
            backgroundColor: `rgba(0, 0, 0, 0.15)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `rgba(0, 0, 0, 0.15)`,
          },
        }}
      >
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Question #</Th>
                <Th>Number of Items</Th>
                <Th isNumeric>Score</Th>
                <Th isNumeric>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {type === "Kanji" &&
                countBySetKanji?.map((kanji) =>
                  kanji._id.level == index ? (
                    <QuestionSets
                      key={kanji._id.level + kanji._id.type + kanji._id.set}
                      type={kanji._id.type}
                      level={kanji._id.level}
                      set={kanji._id.set}
                    />
                  ) : null
                )}
              {type === "Vocab" &&
                countBySetVocab?.map((vocab) =>
                  vocab._id.level == index ? (
                    <QuestionSets
                      key={vocab._id.level + vocab._id.type + vocab._id.set}
                      type={vocab._id.type}
                      level={vocab._id.level}
                      set={vocab._id.set}
                    />
                  ) : null
                )}
              {type === "Grammar" &&
                countBySetGrammar?.map((grammar) =>
                  grammar._id.level == index ? (
                    <QuestionSets
                      key={
                        grammar._id.level + grammar._id.type + grammar._id.set
                      }
                      type={grammar._id.type}
                      level={grammar._id.level}
                      set={grammar._id.set}
                    />
                  ) : null
                )}
            </Tbody>
          </Table>
        </TableContainer>
      </AccordionPanel>
    </AccordionItem>
  );
};
export default QuestionLevel;
