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
const ManageQuestionKanji = ({
  index,
  type,
  currentlySelected,
  setCurrentlySelected,
}) => {
  const { countBySetKanji } = useQuestionContext();
  const [isPreview, setIsPreview] = useState(false);
  const [currentlySelectedQn, setCurrenlySelectedQn] = useState("none");

  let kanjiCtr = 0;

  type === "Kanji"
    ? countBySetKanji?.map((kanji) => kanji._id.level == index && kanjiCtr++)
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
        isDisabled={type === "Kanji" && !kanjiCtr}
        verticalAlign="center"
      >
        <AccordionButton
          onClick={() => {
            if (currentlySelected === `N${index}`) {
              setCurrentlySelected("none");
              setIsPreview(false);
            } else {
              setCurrentlySelected(`N${index}`);
              setIsPreview(true);
            }
            setCurrenlySelectedQn("none");
          }}
          variant="solid"
        >
          <HStack as="span" flex="1" textAlign="left">
            <ChevronRightIcon />
            <Text fontSize="1em">{`N${index}`}</Text>
          </HStack>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel
          pb={4}
          maxH={currentlySelectedQn === "none" ? "50vh" : "auto"}
          overflowY={currentlySelectedQn === "none" ? "auto" : "hidden"}
          borderRadius="lg"
          sx={{
            "&::-webkit-scrollbar": {
              width: "10px",
              backgroundColor: `rgba(0, 0, 0, 0.15)`,
              borderRightRadius: "lg",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `rgba(0, 0, 0, 0.15)`,
              borderRightRadius: "lg",
            },
          }}
        >
          {isPreview &&
            type === "Kanji" &&
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
        </AccordionPanel>
      </AccordionItem>
    </Collapse>
  );
};
export default ManageQuestionKanji;
