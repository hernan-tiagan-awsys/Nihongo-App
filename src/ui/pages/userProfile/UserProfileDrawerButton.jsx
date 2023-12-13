import { ChevronRightIcon } from "@chakra-ui/icons";
import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import ThemeColors from "../main/ThemeColors";

function UserProfileDrawerButton({ icon, children }) {
  const { hover } = ThemeColors();
  return (
    <HStack
      py="0.5vh"
      cursor="pointer"
      _hover={{ bg: hover }}
      borderRadius="lg"
    >
      {icon}
      <Text fontSize="1.75vh">{children}</Text>
    </HStack>
  );
}

export default UserProfileDrawerButton;
