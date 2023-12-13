import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import ThemeColors from "../main/ThemeColors";

function LearnVocabPagination({ pageNumber, setPageNumber, searchResults }) {
  const { body, bg, border, fontColor, success, error, warning, info, hover } =
    ThemeColors();

  return (
    <Stack
      w={{ base: "100%", lg: "50%" }}
      mb={{ base: "1.5vh", lg: "0" }}
      justifyContent="center"
      direction="row"
      spacing={5}
    >
      <IconButton
        icon={<ChevronLeftIcon />}
        variant="outline"
        border={border}
        bg={bg}
        isDisabled={pageNumber <= 0}
        onClick={() => {
          if (pageNumber > 0) setPageNumber(pageNumber - 1);
        }}
      />
      <InputGroup maxW="7.5em">
        <Input
          fontWeight="normal"
          variant="outline"
          border={border}
          bg={bg}
          placeholder={pageNumber + 1}
          type="number"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (
                e.target.value < Math.ceil(searchResults.length / 12) + 1 &&
                e.target.value > 0
              ) {
                setPageNumber(Number(e.target.value) - 1);
              }
              e.target.value = "";
              e.target.blur();
            }
          }}
        />
        <InputRightAddon
          border="none"
          bg={bg}
          children={`/ ${
            searchResults.length > 12 ? Math.ceil(searchResults.length / 12) : 1
          }`}
        />
      </InputGroup>
      <IconButton
        icon={<ChevronRightIcon />}
        variant="outline"
        border={border}
        bg={bg}
        isDisabled={pageNumber >= Math.floor(searchResults.length / 12)}
        onClick={() => {
          if (pageNumber < Math.floor(searchResults.length / 12))
            setPageNumber(pageNumber + 1);
        }}
      />
    </Stack>
  );
}

export default LearnVocabPagination;
