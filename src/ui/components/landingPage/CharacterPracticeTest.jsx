import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Tag,
  TagLabel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DataSet from "../../../assets/data.json";
import CharacterPracticeTestCard from "./CharacterPracticeTestCard";
import CharacterList from "./CharacterList";
import ThemeColors from "../../pages/main/ThemeColors";

function CharacterPracticeTest(props) {
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();
  const [mode, setMode] = useState("");

  return (
    <Container minW="90vw" bg={bg} p={10} boxShadow={"lg"}>
      {/* <Container mb={20} minW="80%">
        <Heading fontSize="3vw" textAlign={"center"} my={10}>
          日本語のひらがな
        </Heading>
        <SimpleGrid columns={16} gap={1}>
          {DataSet.alphabet.map((data, index) => {
            return (
              <CharacterList
                key={index}
                data={data}
                index={index}
                mode={props.mode}
              />
            );
          })}
        </SimpleGrid>
      </Container> */}
      <SimpleGrid columns={4} gap={10}>
        {DataSet.alphabet.map((data, index) => {
          if (index < 16) {
            return (
              <CharacterPracticeTestCard
                key={index}
                data={data}
                index={index}
                mode={props.mode}
                length={DataSet.alphabet.length}
              />
            );
          }
        })}
      </SimpleGrid>
    </Container>
  );
}

export default CharacterPracticeTest;
