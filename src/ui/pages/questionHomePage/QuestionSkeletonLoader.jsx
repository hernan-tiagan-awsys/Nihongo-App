import {
    Box,
    GridItem,
    SkeletonCircle,
    SkeletonText,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import ThemeColors from "../main/ThemeColors";

function QuestionSkeletonLoader() {
    const { body, bg, border, fontColor, success, error, warning, info } =
        ThemeColors();
    const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <GridItem colSpan={"2"}>
            {boxes.map((box) => {
                return (
                    <Box
                        key={box}
                        bg={bg}
                        mr="1.25vw"
                        px="2.25vw"
                        py="2.5vw"
                        mb="2vh"
                        minH="25vh"
                        borderRadius="lg"
                    >
                        <SkeletonCircle fadeDuration={1} size="10" />
                        <SkeletonText
                            fadeDuration={4}
                            mt="4"
                            noOfLines={4}
                            spacing="4"
                            skeletonHeight="3"
                        />
                    </Box>
                );
            })}
        </GridItem>
    );
}

export default QuestionSkeletonLoader;
