//#region Imports
import React, { useState } from "react";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  GridItem,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { useKanaContext } from "../../../logic/hooks/kana/useKanaContext";

import {
  getKanaCombinationList,
  getKanaDakutenList,
  getMainKanaList,
} from "./kanaCharacterList";

import KanaSelectorButtonGroup from "./KanaSelectorButtonGroup";

import ThemeColors from "../main/ThemeColors";
import { ChevronRightIcon } from "@chakra-ui/icons";
//#endregion

function KanaSelector({ type }) {
  //Importing app theme colors
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();

  const { isOpen, onOpen, onClose } = useDisclosure();

  //#region Variable decleration
  const navigate = useNavigate();
  // -------------------------------------------------------------------------------------
  const { kanaGroup, dispatch: kanaDispatch } = useKanaContext();
  // -------------------------------------------------------------------------------------
  const mainKana = getMainKanaList(type);
  const dakutenKana = getKanaDakutenList(type);
  const combinationKana = getKanaCombinationList(type);
  // -------------------------------------------------------------------------------------
  const [mainKanaSelected, setMainKanaSelected] = useState(
    setDefaultKanas(mainKana)
  );
  const [dakutenKanaSelected, setDakutenKanaSelected] = useState(
    setDefaultKanas(dakutenKana)
  );
  const [combinationKanaSelected, setCombinationKanaSelected] = useState(
    setDefaultKanas(combinationKana)
  );
  //#endregion

  //Checks which kana is saved in the context and places it inside a new useState
  function setDefaultKanas(kanaList) {
    const temp = [];
    kanaList.map((value) => {
      if (kanaGroup.includes(value.split("・")[1]))
        temp.push(value.split("・")[1]);
    });
    return temp;
  }

  //Checks which kana is chosen
  function setMode() {
    let mode = [];
    if (mainKanaSelected.length) mode.push("main");
    if (dakutenKanaSelected.length) mode.push("dakuten");
    if (combinationKanaSelected.length) mode.push("combination");
    return mode;
  }

  return (
    <Container minW="98%">
      <Grid
        display={{ base: "block", lg: "grid" }}
        templateRows="repeat(6, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem mt={{ base: "2.5vh", lg: "0.5vh" }} rowSpan={1} colSpan={6}>
          <Button
            key="ButtonAllKana"
            size={{ base: "xs", lg: "sm", xl: "md" }}
            mb={{ base: "1vh", lg: "0" }}
            mt="1vh"
            w="100%"
            variant="outline"
            borderColor={border}
            fontWeight="normal"
            onClick={() => {
              kanaDispatch({ type: "modeSet", payload: [] });
              kanaDispatch({ type: "typeSet", payload: type });
              kanaDispatch({ type: "groupSet", payload: [] });
              navigate("/kana-quiz");
            }}
          >
            All Kana
          </Button>
        </GridItem>

        <GridItem rowSpan={4} colSpan={2} mb={{ base: "2.5vh", lg: "0" }}>
          <KanaSelectorButtonGroup
            mode={"main"}
            label={"All Main Kana"}
            kanaGroup={mainKana}
            selectedGroup={mainKanaSelected}
            selectedGroupSetter={setMainKanaSelected}
          />
        </GridItem>
        <GridItem rowSpan={4} colSpan={2} mb={{ base: "2.5vh", lg: "0" }}>
          <KanaSelectorButtonGroup
            mode={"dakuten"}
            label={"All Dakuten Kana"}
            kanaGroup={dakutenKana}
            selectedGroup={dakutenKanaSelected}
            selectedGroupSetter={setDakutenKanaSelected}
          />
        </GridItem>
        <GridItem rowSpan={5} colSpan={2} mb={{ base: "2.5vh", lg: "0" }}>
          <KanaSelectorButtonGroup
            mode={"combination"}
            label={"All Combination Kana"}
            kanaGroup={combinationKana}
            selectedGroup={combinationKanaSelected}
            selectedGroupSetter={setCombinationKanaSelected}
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={4}>
          <Button
            key="ButtonAllKana"
            size={{ base: "xs", lg: "sm", xl: "md" }}
            w="100%"
            fontSize="0.75em"
            variant="outline"
            borderColor={border}
            fontWeight="normal"
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
              kanaDispatch({ type: "typeSet", payload: type });
              onOpen();
            }}
          >
            Load Selected Kana
          </Button>
        </GridItem>
      </Grid>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent bg={bg}>
          <ModalHeader>Kanas To load</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={kanaGroup.length ? 5 : 1} spacing={3}>
              {kanaGroup.length ? (
                kanaGroup.map((value) => {
                  return (
                    <Tag
                      size="md"
                      minW="3em"
                      key={value}
                      borderRadius="full"
                      variant="outline"
                    >
                      <TagLabel p="0.25em" textAlign="center">
                        <Text>
                          <ChevronRightIcon mr="0.25em" />
                          {value}
                        </Text>
                      </TagLabel>
                    </Tag>
                  );
                })
              ) : (
                <Text>
                  <ChevronRightIcon mr="0.25em" />
                  Select Kanas to load
                </Text>
              )}
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              isDisabled={!kanaGroup.length}
              colorScheme="blue"
              onClick={() => {
                navigate("/kana-quiz");
              }}
            >
              Proceed
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default KanaSelector;
