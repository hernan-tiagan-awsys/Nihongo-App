import React from "react";
import ThemeColors from "../../pages/main/ThemeColors";
import { Flex } from "@chakra-ui/react";

function NavbarContainer({ children }) {
  const { bg } = ThemeColors();
  return (
    <Flex
      position="fixed"
      bg={bg}
      alignItems="center"
      gap="2"
      zIndex="5"
      boxShadow="lg"
      minH="10vh"
      maxH="10vh"
      w="100%"
      pl={{ base: "2em", lg: "2em" }}
    >
      {children}
    </Flex>
  );
}

export default NavbarContainer;
