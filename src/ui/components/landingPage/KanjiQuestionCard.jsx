import {
  Text,
  SimpleGrid,
  Button,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ThemeColors from "../../pages/main/ThemeColors";

function KanjiQuestionCard({ index, question, handleUserHasAnswered }) {
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();
  const [isChosen, setIsChosen] = useState("");

  function handleOnClick(choice) {
    setIsChosen(choice);
    handleUserHasAnswered(index, true);
  }

  return (
    <Box>
      <Text fontSize={"1.25vw"} py={"5"}>
        {question.q}
      </Text>
      <SimpleGrid columns={2} spacing={10}>
        <Button
          borderColor={border}
          bg={isChosen === question.choice1 ? "green.400" : bg}
          variant="outline"
          onClick={() => {
            handleOnClick(question.choice1);
          }}
        >
          {question.choice1}
        </Button>
        <Button
          borderColor={border}
          bg={isChosen === question.choice2 ? "green.400" : bg}
          variant={"outline"}
          onClick={() => {
            handleOnClick(question.choice2);
          }}
        >
          {question.choice2}
        </Button>
        <Button
          borderColor={border}
          bg={isChosen === question.choice3 ? "green.400" : bg}
          variant={"outline"}
          onClick={() => {
            handleOnClick(question.choice3);
          }}
        >
          {question.choice3}
        </Button>
        <Button
          borderColor={border}
          bg={isChosen === question.choice4 ? "green.400" : bg}
          variant={"outline"}
          onClick={() => {
            handleOnClick(question.choice4);
          }}
        >
          {question.choice4}
        </Button>
      </SimpleGrid>
    </Box>
  );
}

export default KanjiQuestionCard;
