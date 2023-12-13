import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  InputGroup,
  useBoolean,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import ThemeColors from "../main/ThemeColors";
import { useState } from "react";
import VocabListFactory from "../../../logic/objects/VocabListFactory";
import LearnVocabLevelMenu from "./LearnVocabLevelMenu";
import LearnVocabSearchBar from "./LearnVocabSearchBar";
import LearnVocabPagination from "./LearnVocabPagination";
import LearnVocabModeSelector from "./LearnVocabModeSelector";
import LearnVocabCards from "./LearnVocabCards";
import LearnVocabList from "./LearnVocabList";

function LearnVocab() {
  const { body, bg, border, fontColor, success, error, warning, info, hover } =
    ThemeColors();
  const [pageNumber, setPageNumber] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [searchValueLevel, setSearchValueLevel] = useState("All");
  const [searchResults, setSearchResults] = useState(
    new VocabListFactory("All")
  );
  const [toggleMode, setToggleMode] = useBoolean(true);

  function search() {
    return new VocabListFactory(searchValueLevel).filter((param) => {
      return (
        param.kanji.includes(searchValue) ||
        param.romaji.includes(searchValue) ||
        param.hiragana.includes(searchValue) ||
        param.meaning.includes(searchValue)
      );
    });
  }

  useEffect(() => {
    setSearchResults(search());
  }, [searchValue, searchValueLevel]);

  return (
    <Box minH={"100vh"}>
      <Divider minH={"10vh"} />

      <Box
        minW="100vw"
        h="90vh"
        pb="10vh"
        boxShadow="lg"
        overflowX="hidden"
        overflowY="auto"
        overscrollBehaviorX="auto"
        overscrollBehaviorY="none"
        sx={{
          "&::-webkit-scrollbar": {
            width: "12px",
            borderRadius: "8px",
            backgroundColor: `rgba(0, 0, 0, 0.25)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `rgba(0, 0, 0, 0.25)`,
          },
        }}
      >
        <Container minW="90vw">
          <Flex
            direction={{ base: "column", lg: "row" }}
            mt="2.5vh"
            bg={bg}
            borderRadius="lg"
            p="0.25em"
          >
            <Box
              w="100%"
              mb={{ base: "1.5vh", lg: "0" }}
              bg={bg}
              borderRadius="lg"
            >
              <InputGroup zIndex="1" h="2.5em">
                <LearnVocabLevelMenu
                  searchValueLevel={searchValueLevel}
                  onClick={(level) => {
                    setSearchValueLevel(level);
                    setPageNumber(0);
                  }}
                />
                <LearnVocabSearchBar
                  setSearchValue={setSearchValue}
                  setPageNumber={setPageNumber}
                />
              </InputGroup>
            </Box>
            <LearnVocabPagination
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              searchResults={searchResults}
            />
            <LearnVocabModeSelector
              toggleMode={toggleMode}
              setToggleMode={setToggleMode}
            />
          </Flex>
        </Container>
        <Container mb="5vh" minH="80vh" minW="90vw">
          {toggleMode ? (
            <LearnVocabCards
              searchResults={searchResults}
              pageNumber={pageNumber}
            />
          ) : (
            <LearnVocabList
              searchResults={searchResults}
              pageNumber={pageNumber}
            />
          )}
        </Container>
      </Box>
    </Box>
  );
}

export default LearnVocab;
