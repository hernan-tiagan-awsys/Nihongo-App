import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import KanaSelector from "./KanaSelector";
import ThemeColors from "../main/ThemeColors";

function KanaSelectorTab() {
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();
  return (
    <Box>
      <Tabs
        isFitted
        variant="line"
        colorScheme="white"
        minW={{ base: "92vw", lg: "60vw" }}
        h="auto"
        bg={bg}
        borderRadius="10"
        boxShadow="lg"
      >
        <TabList>
          <Tab>Learn Hiragana</Tab>
          <Tab>Learn Katakana</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <KanaSelector type="hiragana" key="KanaSelectorHiragana" />
          </TabPanel>
          <TabPanel>
            <KanaSelector type="katakana" key="KanaSelectorKatakana" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default KanaSelectorTab;
