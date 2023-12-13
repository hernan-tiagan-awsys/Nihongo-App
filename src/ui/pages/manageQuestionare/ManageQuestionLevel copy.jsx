import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Text,
  HStack,
  Collapse,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import ManageQuestionSets from "./ManageQuestionSets";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";
import { useState } from "react";
const ManageQuestionLevel = ({
  index,
  type,
  selections,
  currentlySelected,
  setCurrentlySelected,
}) => {
  const { countBySetVocab, countBySetGrammar, countBySetKanji } =
    useQuestionContext();
  const [currentlySelectedQn, setCurrenlySelectedQn] = useState("none");

  let kanjiCtr = 0;
  let vocabCtr = 0;
  let grammarCtr = 0;

  type === "Kanji"
    ? countBySetKanji?.map((kanji) => kanji._id.level == index && kanjiCtr++)
    : null;

  type === "Vocab"
    ? countBySetVocab?.map((vocab) => vocab._id.level == index && vocabCtr++)
    : null;

  type === "Grammar"
    ? countBySetGrammar?.map(
        (grammar) => grammar._id.level == index && grammarCtr++
      )
    : null;

  function checkIfOpen() {
    if (currentlySelected === "none") {
      return true;
    } else if (currentlySelected === `N${index}`) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Collapse animateOpacity in={checkIfOpen()}>
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
        <AccordionButton
          onClick={() => {
            if (currentlySelected === `N${index}`) {
              // setCurrentlySelected("none");
              if (type === "Kanji") {
                setCurrentlySelected({ ...selections, kanji: "none" });
              } else if (type === "Vocab") {
                setCurrentlySelected({ ...selections, vocab: "none" });
              } else if (type === "Grammar") {
                setCurrentlySelected({ ...selections, grammar: "none" });
              }
            } else {
              // setCurrentlySelected(`N${index}`);
              if (type === "Kanji") {
                setCurrentlySelected({
                  kanji: `N${index}`,
                  vocab: "none",
                  grammar: "none",
                });
              } else if (type === "Vocab") {
                setCurrentlySelected({
                  kanji: "none",
                  vocab: `N${index}`,
                  grammar: "none",
                });
              } else if (type === "Grammar") {
                setCurrentlySelected({
                  kanji: "none",
                  vocab: "none",
                  grammar: `N${index}`,
                });
              }
            }
          }}
          variant="solid"
        >
          <HStack as="span" flex="1" textAlign="left">
            <ChevronRightIcon />
            <Text fontSize="1em">{`N${index}`}</Text>
          </HStack>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4}>
          {type === "Kanji" &&
            countBySetKanji?.map((kanji) =>
              kanji._id.level == index ? (
                <ManageQuestionSets
                  currentlySelectedQn={currentlySelectedQn}
                  setCurrenlySelectedQn={setCurrenlySelectedQn}
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
                <ManageQuestionSets
                  currentlySelectedQn={currentlySelectedQn}
                  setCurrenlySelectedQn={setCurrenlySelectedQn}
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
                <ManageQuestionSets
                  currentlySelectedQn={currentlySelectedQn}
                  setCurrenlySelectedQn={setCurrenlySelectedQn}
                  key={grammar._id.level + grammar._id.type + grammar._id.set}
                  type={grammar._id.type}
                  level={grammar._id.level}
                  set={grammar._id.set}
                />
              ) : null
            )}
        </AccordionPanel>
      </AccordionItem>
    </Collapse>
  );
};
export default ManageQuestionLevel;
