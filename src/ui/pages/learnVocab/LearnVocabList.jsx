import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
  useBoolean,
} from "@chakra-ui/react";
import React from "react";
import ThemeColors from "../main/ThemeColors";
import LearnVocabNotFound from "./LearnVocabNotFound";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function LearnVocabList({ searchResults, pageNumber }) {
  const { body, bg, border, fontColor, success, error, warning, info, hover } =
    ThemeColors();
  const [toggleKanji, setToggleKanji] = useBoolean(true);
  const [toggleHirKat, setToggleHirKat] = useBoolean(true);
  const [toggleRomaji, setToggleRomaji] = useBoolean(true);
  const [toggleDef, setToggleDef] = useBoolean(true);
  return (
    <VStack my="2.5vh">
      <Grid
        bg={bg}
        p="0.75em"
        borderRadius="lg"
        templateColumns="repeat(8, 1fr)"
        w="100%"
      >
        <GridItem colSpan={1} pl={{ base: "0", lg: "0.75em", xl: "1em" }}>
          <HStack cursor="pointer" onClick={setToggleKanji.toggle}>
            <Button
              // size={{ base: "xs", lg: "sm ", xl: "md" }}
              fontSize={{ base: "0.5em", lg: "0.75em", xl: "1em" }}
              mr={{ base: "-3.25em", lg: "0" }}
              textAlign="left"
              variant="unstyled"
            >
              Kanji
            </Button>
            {toggleKanji ? (
              <ViewIcon color="gray.400" boxSize="0.75em" />
            ) : (
              <ViewOffIcon color="gray.400" boxSize="0.75em" />
            )}
          </HStack>
        </GridItem>
        <GridItem colSpan={2}>
          <HStack cursor="pointer" onClick={setToggleHirKat.toggle}>
            <Button
              // size={{ base: "xs", lg: "sm ", xl: "md" }}
              fontSize={{ base: "0.5em", lg: "0.75em", xl: "1em" }}
              variant="unstyled"
              mr={{ base: "-1em", lg: "0" }}
            >
              Hiragana
            </Button>
            {toggleHirKat ? (
              <ViewIcon color="gray.400" boxSize="0.75em" />
            ) : (
              <ViewOffIcon color="gray.400" boxSize="0.75em" />
            )}
          </HStack>
        </GridItem>
        <GridItem colSpan={2}>
          <HStack cursor="pointer" onClick={setToggleRomaji.toggle}>
            <Button
              // size={{ base: "xs", lg: "sm ", xl: "md" }}
              fontSize={{ base: "0.5em", lg: "0.75em", xl: "1em" }}
              variant="unstyled"
              mr={{ base: "-1em", lg: "0" }}
            >
              Romaji
            </Button>
            {toggleRomaji ? (
              <ViewIcon color="gray.400" boxSize="0.75em" />
            ) : (
              <ViewOffIcon color="gray.400" boxSize="0.75em" />
            )}
          </HStack>
        </GridItem>
        <GridItem colSpan={3}>
          <HStack cursor="pointer" onClick={setToggleDef.toggle}>
            <Button
              // size={{ base: "xs", lg: "sm ", xl: "md" }}
              fontSize={{ base: "0.5em", lg: "0.75em", xl: "1em" }}
              variant="unstyled"
              mr={{ base: "-1em", lg: "0" }}
            >
              Definition
            </Button>
            {toggleDef ? (
              <ViewIcon color="gray.400" boxSize="0.75em" />
            ) : (
              <ViewOffIcon color="gray.400" boxSize="0.75em" />
            )}
          </HStack>
        </GridItem>
      </Grid>
      <VStack w="100%">
        {!searchResults.length && <LearnVocabNotFound />}
        {searchResults.map((value, index) => {
          if (index >= 0 + pageNumber * 12 && index <= 11 + pageNumber * 12) {
            return (
              <Box w="100%">
                <Divider minH="0.5vh" />
                <Grid
                  boxShadow="lg"
                  bg={bg}
                  p="0.75em"
                  borderRadius="lg"
                  templateColumns="repeat(8, 1fr)"
                  w="100%"
                >
                  <GridItem
                    my="auto"
                    colSpan={1}
                    fontStyle="oblique"
                    fontWeight="light"
                    fontSize={{ base: "0.5em", lg: "0.75em", xl: "1em" }}
                    color="GrayText"
                    pl={{ base: "0.25em", lg: "0.75em", xl: "1em" }}
                  >
                    {toggleKanji ? value.kanji : "・・・・・"}
                  </GridItem>
                  <GridItem
                    colSpan={2}
                    fontSize={{ base: "0.75em", lg: "1em", xl: "1.25em" }}
                  >
                    {toggleHirKat ? value.hiragana : "・・・・・"}
                  </GridItem>
                  <GridItem
                    colSpan={2}
                    fontSize={{ base: "0.75em", lg: "1em", xl: "1.25em" }}
                  >
                    {toggleRomaji ? value.romaji : "・・・・・"}
                  </GridItem>
                  <GridItem
                    colSpan={3}
                    my="auto"
                    fontStyle="oblique"
                    fontWeight="light"
                    fontSize={{ base: "0.5em", lg: "0.75em", xl: "1em" }}
                    color="GrayText"
                  >
                    {toggleDef ? value.meaning : "・・・・・"}
                  </GridItem>
                </Grid>
                <Divider />
              </Box>
            );
          }
        })}
      </VStack>
    </VStack>
  );
}

export default LearnVocabList;
