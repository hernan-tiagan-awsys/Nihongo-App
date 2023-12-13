import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputRightElement, useToast } from "@chakra-ui/react";
import React from "react";

function LearnVocabSearchBar({
  setSearchValue,
  setPageNumber,
  setSearchResults,
  search,
}) {
  const toast = useToast();
  return (
    <Box w="100%">
      <Input
        variant="flushed"
        placeholder="Search"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setPageNumber(0);
            toast({
              title: "Loaded",
              position: "top",
              status: "success",
              duration: 500,
              isClosable: true,
            });
          }
        }}
      />
      <InputRightElement cursor={"pointer"}>
        <SearchIcon
          onClick={() => {
            setPageNumber(0);
            toast({
              title: "Loaded",
              position: "top",
              status: "success",
              duration: 500,
              isClosable: true,
            });
          }}
        />
      </InputRightElement>
    </Box>
  );
}

export default LearnVocabSearchBar;
