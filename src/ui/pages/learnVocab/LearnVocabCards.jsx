import {
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Spacer,
  Text,
  VStack,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";
import React from "react";
import ThemeColors from "../main/ThemeColors";
import LearnVocabNotFound from "./LearnVocabNotFound";
import { useState } from "react";
import LearnVocabSampleSentence from "./LearnVocabSampleSentence";

function LearnVocabCards({ searchResults, pageNumber }) {
  const { body, bg, border, fontColor, success, error, warning, info, hover } =
    ThemeColors();
  const [displayText, setDisplayText] = useState("hir");
  const [selectionTextLeft, setSelectionTextLeft] = useState("kan");
  const [selectionTextRight, setSelectionTextRight] = useState("rom");
  const [sampleSentenceSelection, setSampleSentenceSelection] = useState({
    hiragana: "N/A",
    kanji: "N/A",
    romaji: "N/A",
  });

  return (
    <Grid mt="2.5vh" templateColumns="repeat(3, 1fr)" gap={6}>
      {!searchResults.length && <LearnVocabNotFound />}
      <GridItem colSpan={1}>
        <SimpleGrid columns={1} gap={5}>
          {searchResults.map((value, index) => {
            if (index >= 0 + pageNumber * 12 && index <= 11 + pageNumber * 12) {
              return (
                <Card key={value + index} bg={bg} boxShadow="lg">
                  <CardHeader>
                    <HStack>
                      <Spacer />
                      <Text
                        cursor="pointer"
                        color="GrayText"
                        textAlign="right"
                        fontWeight="light"
                        fontSize="1em"
                        onClick={() => {
                          setDisplayText(selectionTextLeft);
                          setSelectionTextLeft(displayText);
                        }}
                      >
                        {selectionTextLeft === "hir" && value.hiragana}
                        {selectionTextLeft === "rom" && value.romaji}
                        {selectionTextLeft === "kan" && value.kanji}
                      </Text>
                      <Text
                        color="GrayText"
                        textAlign="right"
                        fontWeight="light"
                        fontSize="1em"
                      >
                        ・
                      </Text>
                      <Text
                        cursor="pointer"
                        color="GrayText"
                        textAlign="right"
                        fontWeight="light"
                        fontSize="1em"
                        onClick={() => {
                          setDisplayText(selectionTextRight);
                          setSelectionTextRight(displayText);
                        }}
                      >
                        {selectionTextRight === "hir" && value.hiragana}
                        {selectionTextRight === "rom" && value.romaji}
                        {selectionTextRight === "kan" && value.kanji}
                      </Text>
                    </HStack>
                  </CardHeader>
                  <CardBody>
                    <Text
                      cursor="pointer"
                      textAlign="center"
                      fontSize="200%"
                      onClick={() => {
                        setSampleSentenceSelection({
                          hiragana: value.hiragana,
                          kanji: value.kanji,
                          romaji: value.romaji,
                        });
                      }}
                    >
                      {displayText === "hir" && value.hiragana}
                      {displayText === "rom" && value.romaji}
                      {displayText === "kan" && value.kanji}
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <VStack>
                      <Text
                        fontStyle="oblique"
                        key={value.meaning + index}
                        w="100%"
                        fontWeight="light"
                        fontSize="0.75em"
                        color="GrayText"
                      >
                        {`- ${value.meaning}`}
                      </Text>
                    </VStack>
                  </CardFooter>
                </Card>
              );
            }
          })}
        </SimpleGrid>
      </GridItem>
      <GridItem colSpan={2} hidden={!searchResults.length}>
        <Box bg={bg} rounded="lg">
          <LearnVocabSampleSentence
            kanji={sampleSentenceSelection.kanji}
            hiragana={sampleSentenceSelection.hiragana}
            romaji={sampleSentenceSelection.romaji}
          />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default LearnVocabCards;
