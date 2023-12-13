import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";
import React from "react";
import ThemeColors from "../main/ThemeColors";

function QuestionAnsweredTrackerMobileWrapper({ children, ...htmlProps }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { bg } = ThemeColors;
  return (
    <>
      <IconButton
        icon={<InfoOutlineIcon />}
        position="fixed"
        bottom="2.5vh"
        right="5vw"
        onClick={onOpen}
        display={{ base: "block", lg: "none" }}
      />
      <Modal onClose={onClose} size="sm" isOpen={isOpen} {...htmlProps}>
        <ModalOverlay />
        <ModalContent bgColor={bg} px="2.5vw" maxW="80vw">
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default QuestionAnsweredTrackerMobileWrapper;
