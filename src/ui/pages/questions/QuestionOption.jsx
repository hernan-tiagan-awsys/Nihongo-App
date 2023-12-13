import { Button, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { useGradeContext } from "../../../logic/hooks/grade/useGradeContext";
import ThemeColors from "../main/ThemeColors";

const QuestionOption = ({
  option,
  bg,
  hoverColor,
  index,
  handleOptionClicked,
  selectedOption,
  answer,
  hasSubmit,
}) => {
  const { border } = ThemeColors();
  // get the index of the selected option
  const isSelected = selectedOption.index === index;
  // Check if already submit and selected option equal to answer
  const isCorrect = hasSubmit && isSelected && answer === option;
  // Check if already submit and selected option not equal to answer
  const isIncorrect = hasSubmit && isSelected && answer !== option;

  return (
    <Button
      size={{ base: "sm", lg: "lg" }}
      fontWeight="light"
      isDisabled={hasSubmit}
      borderColor={border}
      variant="outline"
      bg={
        isCorrect
          ? "green.300"
          : isIncorrect
          ? "red.300"
          : isSelected
          ? "blue.300"
          : bg
      }
      _hover={
        isCorrect
          ? { bg: "green.300" }
          : isIncorrect
          ? { bg: "red.300" }
          : isSelected
          ? { bg: "blue.200" }
          : { bg: hoverColor }
      }
      onClick={() => {
        handleOptionClicked(index, option);
      }}
    >
      {option}
    </Button>
  );
};
export default QuestionOption;
