import { Stack, Tab, TabList, Tabs } from "@chakra-ui/react";
import React from "react";
import ThemeColors from "../main/ThemeColors";

function LearnVocabModeSelector({ toggleMode, setToggleMode }) {
  const { body, bg, border, fontColor, success, error, warning, info, hover } =
    ThemeColors();
  return (
    <Stack
      w={{ base: "100%", lg: "25%" }}
      mb={{ base: "1.5vh", lg: "0" }}
      justifyContent="center"
      direction="row"
    >
      <Tabs borderRadius="lg" bg={bg} variant="unstyled">
        <TabList>
          <Tab
            minW="5em"
            _selected={{
              bg: hover,
              borderLeftRadius: "lg",
            }}
            isDisabled={toggleMode}
            onClick={setToggleMode.on}
          >
            Cards
          </Tab>
          <Tab
            minW="5em"
            _selected={{
              bg: hover,
              borderRightRadius: "lg",
            }}
            isDisabled={!toggleMode}
            onClick={setToggleMode.off}
          >
            Lists
          </Tab>
        </TabList>
      </Tabs>
    </Stack>
  );
}

export default LearnVocabModeSelector;
