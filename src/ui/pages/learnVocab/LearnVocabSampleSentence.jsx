import {
  Box,
  Container,
  Divider,
  HStack,
  ListItem,
  Tag,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import sentences from "../../../assets/sampleSentence.json";
import ThemeColors from "../main/ThemeColors";
import { useEffect, useState } from "react";

function LearnVocabSampleSentence({ kanji, hiragana, romaji }) {
  const { border, bg } = ThemeColors();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    let res = search().map((sentence, index) => {
      return (
        <ListItem
          my="1em"
          key={sentence.jp + sentence.eng + index}
          borderBottomColor={border}
        >
          {highlightKanji(sentence.jp)}
          <Text>{sentence.eng}</Text>
          <Divider my="0.5em" />
        </ListItem>
      );
    });
    setSearchResults(res);
  }, [kanji, hiragana, romaji]);

  function search() {
    return sentences.filter((param) => {
      return param.jp.includes(kanji) || param.jp.includes(hiragana);
    });
  }

  function highlightKanji(sentence) {
    const split = sentence.split(kanji);
    return `${split[0]}「${kanji}」${split[1]}`;
  }

  return (
    <>
      <Container minW="90%" pt="2.5em">
        <HStack mb="1.5em">
          <Tag
            mr=".25em"
            bg={bg}
            borderColor={border}
            borderWidth="1px"
            p="0.25em"
            fontSize="3em"
          >
            {kanji}
          </Tag>
          <Box>
            <Text>Readings:</Text>
            <Text>{hiragana}</Text>
            <Text>{romaji}</Text>
          </Box>
        </HStack>
      </Container>
      <UnorderedList
        px="2.5em"
        pb="2.5em"
        fontStyle="oblique"
        w="100%"
        fontWeight="light"
        fontSize="1em"
        color="GrayText"
      >
        {searchResults}
      </UnorderedList>
    </>
  );
}

export default LearnVocabSampleSentence;
