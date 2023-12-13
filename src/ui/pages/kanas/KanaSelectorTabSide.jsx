import React, { useState } from "react";

import { Box, Button, Container } from "@chakra-ui/react";
import {
  getKanaCombinationList,
  getKanaDakutenList,
  getMainKanaList,
} from "./kanaCharacterList";
import { useKanaContext } from "../../../logic/hooks/kana/useKanaContext";
import KanaSelectorButtonGroup from "./KanaSelectorButtonGroup";
import ThemeColors from "../main/ThemeColors";

// Gets stored values for the following data
function KanaSelectorTabSide() {
  const {
    // kanaMode values are Main, Dakuten or Combination
    kanaMode,
    // kanatype are Hiragana or Katakana
    kanaType,
    // Groups are individual selected kanas 'grouped'
    kanaGroup,
    dispatch: kanaDispatch,
  } = useKanaContext();

  {
    /* ================================================================================ */
  }
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();

  //  Gets a list of all kanas per modes for the type that is selected
  const mainKana = getMainKanaList(kanaType);
  const dakutenKana = getKanaDakutenList(kanaType);
  const combinationKana = getKanaCombinationList(kanaType);

  {
    /* ================================================================================ */
  }

  // Checks if the currently stored groups of kana exists inside this specific mode if it does put it inside an array
  // After checking every kana on the list return the array and set it as the value for the state
  const [mainKanaSelected, setMainKanaSelected] = useState(() => {
    const temp = [];
    mainKana.map((value) => {
      if (kanaGroup.includes(value.split("・")[1]))
        temp.push(value.split("・")[1]);
    });
    return temp;
  });
  {
    /* ================================================================================ */
  }

  // Checks if the currently stored groups of kana exists inside this specific mode if it does put it inside an array
  // After checking every kana on the list return the array and set it as the value for the state
  const [dakutenKanaSelected, setDakutenKanaSelected] = useState(() => {
    const temp = [];
    dakutenKana.map((value) => {
      if (kanaGroup.includes(value.split("・")[1]))
        temp.push(value.split("・")[1]);
    });
    return temp;
  });
  {
    /* ================================================================================ */
  }

  // Checks if the currently stored groups of kana exists inside this specific mode if it does put it inside an array
  // After checking every kana on the list return the array and set it as the value for the state
  const [combinationKanaSelected, setCombinationKanaSelected] = useState(() => {
    const temp = [];
    combinationKana.map((value) => {
      if (kanaGroup.includes(value.split("・")[1]))
        temp.push(value.split("・")[1]);
    });
    return temp;
  });

  {
    /* ================================================================================ */
  }

  // Checks for which state has data inside it , if it does add the mode into an array
  // Return the array as the modes the user has selected
  function setMode() {
    let mode = [];
    if (mainKanaSelected.length) {
      mode.push("main");
    }
    if (dakutenKanaSelected.length) {
      mode.push("dakuten");
    }
    if (combinationKanaSelected.length) {
      mode.push("combination");
    }
    return mode;
  }
  {
    /* ================================================================================ */
  }

  return (
    <Container
      h="90vh"
      overflow="auto"
      overscrollBehavior="auto"
      sx={{
        "&::-webkit-scrollbar": {
          width: "10px",
          borderRadius: "8px",
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
      }}
    >
      <Box
        textAlign="center"
        my="2.5vh"
        bg={bg}
        p="5"
        boxShadow="lg"
        borderRadius="lg"
        borderWidth={"1px"}
        borderColor={border}
      >
        {/* ================================================================================  */}
        <Button
          bg={bg}
          variant="outline"
          borderColor={border}
          w="100%"
          fontSize="2vh"
          fontWeight="light"
          onClick={() => {
            kanaDispatch({
              type: "typeSet",
              payload: kanaType === "hiragana" ? "katakana" : "hiragana",
            });
          }}
        >
          {`Switch to ${kanaType === "hiragana" ? "Katakana" : "Hiragana"}`}
        </Button>
        {/* ================================================================================  */}
      </Box>

      <Box
        textAlign="center"
        mb="2.5vh"
        bg={bg}
        p="5"
        boxShadow="lg"
        borderRadius="lg"
        borderWidth={"1px"}
        borderColor={border}
      >
        {/* ================================================================================  */}
        <Button
          variant="outline"
          borderColor={border}
          loadingText="All Kana"
          isDisabled={!kanaGroup.length || !kanaMode.length}
          w="45%"
          mr="1vw"
          fontSize="2vh"
          fontWeight="light"
          onClick={() => {
            kanaDispatch({ type: "modeSet", payload: [] });
            kanaDispatch({ type: "typeSet", payload: kanaType });
            kanaDispatch({ type: "groupSet", payload: [] });
            setMainKanaSelected([]);
            setDakutenKanaSelected([]);
            setCombinationKanaSelected([]);
          }}
        >
          All Kana
        </Button>
        {/* ================================================================================  */}
        <Button
          variant="outline"
          borderColor={border}
          loadingText="Custom Kana"
          isDisabled={kanaGroup.length || kanaMode.length}
          w="45%"
          fontSize="2vh"
          fontWeight="light"
          onClick={() => {
            kanaDispatch({ type: "modeSet", payload: setMode() });
            kanaDispatch({
              type: "groupSet",
              payload: [
                ...mainKanaSelected,
                ...dakutenKanaSelected,
                ...combinationKanaSelected,
              ],
            });
            kanaDispatch({ type: "typeSet", payload: kanaType });
          }}
        >
          Selected Kana
        </Button>
      </Box>

      {/* All Main Kana */}
      <Box
        textAlign="center"
        mb="2.5vh"
        bg={bg}
        p="5"
        boxShadow="lg"
        borderRadius="lg"
        borderWidth={"1px"}
        borderColor={border}
      >
        <KanaSelectorButtonGroup
          mode={"main"}
          label={"All Main Kana"}
          kanaGroup={mainKana}
          selectedGroup={mainKanaSelected}
          selectedGroupSetter={setMainKanaSelected}
        />
      </Box>

      {/* All Dakuten Kana */}
      <Box
        textAlign="center"
        mb="2.5vh"
        bg={bg}
        p="5"
        boxShadow="lg"
        borderRadius="lg"
        borderWidth={"1px"}
        borderColor={border}
      >
        <KanaSelectorButtonGroup
          mode={"dakuten"}
          label={"All Dakuten Kana"}
          kanaGroup={dakutenKana}
          selectedGroup={dakutenKanaSelected}
          selectedGroupSetter={setDakutenKanaSelected}
        />
      </Box>

      {/* All Combination Kana */}
      <Box
        textAlign="center"
        mb="2.5vh"
        bg={bg}
        p="5"
        boxShadow="lg"
        borderRadius="lg"
        borderWidth={"1px"}
        borderColor={border}
      >
        <KanaSelectorButtonGroup
          mode={"combination"}
          label={"All Combination Kana"}
          kanaGroup={combinationKana}
          selectedGroup={combinationKanaSelected}
          selectedGroupSetter={setCombinationKanaSelected}
        />
      </Box>
    </Container>
  );
}

export default KanaSelectorTabSide;
