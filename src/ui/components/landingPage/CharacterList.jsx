import { Tag, TagLabel, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";

function CharacterList(props) {
  const bg = useColorModeValue("light.400", "dark.100");
  const border = useColorModeValue("dark.100", "light.400");
  const answer = document.getElementById(`CharCardInput${props.index}`);

  function checkIfCorrect() {
    console.log("aaa");
    const val =
      props.mode === "hir" ? props.data.hiragana : props.data.katakana;
    return val === props.input;
  }

  return (
    <Tag
      key={props.index}
      size="lg"
      variant="outline"
      border={checkIfCorrect ? "green.400" : border}
      bg={bg}
      justifyContent={"center"}
    >
      <TagLabel>
        {props.mode === "hir" ? props.data.hiragana : props.data.katakana}
      </TagLabel>
    </Tag>
  );
}

export default CharacterList;
