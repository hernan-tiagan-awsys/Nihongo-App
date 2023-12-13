import { Tag, TagLabel, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import ThemeColors from "../main/ThemeColors";

export default function QuestionList({ questionNo, userHasAnswered }) {
    const { body, bg, border, fontColor, success, error, warning, info } =
        ThemeColors();
    const chosen = useColorModeValue("gray.200", "dark.200");
    let isDone =
        typeof userHasAnswered[questionNo] === "undefined"
            ? false
            : userHasAnswered[questionNo].isDone;
    return (
        <Tag
            key={questionNo}
            size="lg"
            variant="outline"
            borderColor={border}
            bg={isDone ? chosen : bg}
        >
            <TagLabel
                fontSize="2vh"
                color={border}
            >{`Q${questionNo}`}</TagLabel>
        </Tag>
    );
}
