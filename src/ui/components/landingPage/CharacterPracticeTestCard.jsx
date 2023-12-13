import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Input,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import React, { useState } from "react";
import ThemeColors from "../../pages/main/ThemeColors";

function CharacterPracticeTestCard(props) {
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  function checkIfCorrect(val) {
    let bool = val === props.data.romaji;
    bool ? setIsCorrect(true) : setIsCorrect(false);
    if (bool && props.index !== props.length - 1) {
      document.getElementById(`CharCardInput${props.index + 1}`).focus();
    }
  }

  return (
    <Card
      key={props.index}
      variant={"outline"}
      boxShadow={"lg"}
      bg={bg}
      borderColor={border}
    >
      <CardHeader>
        <Flex>
          <Spacer />
          <Text>
            {props.index + 1}/{props.length}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Heading fontSize="3vw" textAlign={"center"} m={5}>
          {props.mode === "hir" ? props.data.hiragana : props.data.katakana}
        </Heading>
        <Input
          id={`CharCardInput${props.index}`}
          mt={10}
          type="text"
          borderColor={isCorrect ? "green.400" : border}
          isDisabled={isCorrect}
          autoComplete="off"
          onChange={(e) => {
            e.target.value === ""
              ? setHasAnswered(false)
              : setHasAnswered(true);

            if (hasAnswered) {
              checkIfCorrect(e.target.value);
            }
          }}
        ></Input>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default CharacterPracticeTestCard;
