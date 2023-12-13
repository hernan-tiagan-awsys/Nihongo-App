import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Icon, useColorMode } from "@chakra-ui/react";
import React from "react";

function ToggleColorModeButtonIcon() {
  const colorMode = useColorMode().colorMode;
  return colorMode === "light" ? <Icon as={SunIcon} /> : <Icon as={MoonIcon} />;
}

export default ToggleColorModeButtonIcon;
